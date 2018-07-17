function create(){
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }

    var name = $('input[name="name"]').val();
    var email = $('input[name="email"]').val();
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(name == "" || email == "")
    {
        toastr.error('Tên và Email không được phép để trống !');
    } 
    else if(!filter.test($('input[name="email"]').val()))
    {
        toastr.error('Email không đúng định dạng !');
    }
    else {
        $.ajax({
            url: "http://janeto.us.to:7752/api/contact",
            method: "POST",
            header: {
                ContentType: "application/json"
            },
            data: {
                name: name,
                email, email,
                message: $('textarea').val()
            },
            success: function(data){
                toastr.success('Đã gửi thông tin liên hệ của bạn !');
                $('input[name="name"]').val("");
                $('input[name="email"]').val("");
                $('textarea').val("");
            },
            error: function(er){
                console.log(er);
            }
        });
    } 
    
}