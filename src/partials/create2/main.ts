import $ from "jquery";

setTimeout(() => {
  // @ts-ignore
  // var forms = document.querySelectorAll(".create-form-step2");
  document.querySelector(".create-form-step2").addEventListener(
    // Array.prototype.slice.call(forms).forEach(function (form) {
    // form.addEventListener(
    "submit",
    function (event: any) {
      // 阻止浏览器默认提交事件，如果不需要就移除下面这两句
      event.preventDefault();
      event.stopPropagation();

      // get form 表单的值，用于构建自定义请求
      let json = $(".create-form-step2").serialize();
      console.log("json : ", json);
      alert(JSON.stringify(json));

      window.location.pathname = "/create3.html";
    },
    false
  );
  // });
}, 300);
