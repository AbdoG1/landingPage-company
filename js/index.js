function scrollFunction() {
    if(document.documentElement.scrollTop > 200){ // نجلب المسافة العُلوية من شريط التمرير إلى أعلى المستند و نقارنها بالقيمة 200
        document.getElementById("navbar").classList.add("noTransparrent"); // نضيف الصنف في حالة تحقق الشرط
    } else {
        document.getElementById("navbar").classList.remove("noTransparrent"); // نحذف الصنف في الحالة المعاكسة
    }
}

window.onscroll = function() {
    scrollFunction();
}

window.onload = function(){
    let website = new CountUp('website-counter',0 ,250 ,0 ,2.5)
    website.start();
    let app = new CountUp('app-counter',0 ,100 ,0 ,2.5)
    app.start();
    let user = new CountUp('user-counter',0 ,10000 ,0 ,2.5)
    user.start();
    let video = new CountUp('video-counter',0 ,30 ,0 ,2.5)
    video.start();
}


function validate() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
}
validate();

document.getElementById("fullYear").innerHTML = new Date().getFullYear();