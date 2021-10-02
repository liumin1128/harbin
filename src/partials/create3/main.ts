import $ from "jquery";

// var forms = document.querySelectorAll(".create-form-step3");

console.log("xxxx111x");
//@ts-ignore

$("#file1 .my-file-input-input").on("change", () => {
  var filePath = $("#file1 .my-file-input-input").val() as string;
  if (filePath.indexOf("jpg") != -1 || filePath.indexOf("png") != -1) {
    $("#file1 .my-file-input-error").html("").hide();
    var arr = filePath.split("\\");
    var fileName = arr[arr.length - 1];
    $("#file1 .my-file-input-text").html(fileName);
  } else {
    $("#file1 .my-file-input-text").html("");
    $("#file1 .my-file-input-error")
      .html("您未上传文件，或者您上传文件类型有误！")
      .show();
    return false;
  }
});
//@ts-ignore

$("#file2 .my-file-input-input").on("change", () => {
  var filePath = $("#file2 .my-file-input-input").val() as string;
  if (filePath.indexOf("jpg") != -1 || filePath.indexOf("png") != -1) {
    $("#file2 .my-file-input-error").html("").hide();
    var arr = filePath.split("\\");
    var fileName = arr[arr.length - 1];
    $("#file2 .my-file-input-text").html(fileName);
  } else {
    $("#file2 .my-file-input-text").html("");
    $("#file2 .my-file-input-error")
      .html("您未上传文件，或者您上传文件类型有误！")
      .show();
    return false;
  }
});

//@ts-ignore
$("#file3 .my-file-input-input").on("change", () => {
  var filePath = $("#file3 .my-file-input-input").val() as string;
  if (filePath.indexOf("jpg") != -1 || filePath.indexOf("png") != -1) {
    $("#file3 .my-file-input-error").html("").hide();
    var arr = filePath.split("\\");
    var fileName = arr[arr.length - 1];
    $("#file3 .my-file-input-text").html(fileName);
  } else {
    $("#file3 .my-file-input-text").html("");
    $("#file3 .my-file-input-error")
      .html("您未上传文件，或者您上传文件类型有误！")
      .show();
    return false;
  }
});

// @ts-ignore
document.querySelector(".create-form-step3").addEventListener(
  // Array.prototype.slice.call(forms).forEach(function (form) {
  // form.addEventListener(
  "submit",
  function (event: any) {
    console.log("xxxx");
    // 阻止浏览器默认提交事件，如果不需要就移除下面这两句
    event.preventDefault();
    event.stopPropagation();

    // get form 表单的值，用于构建自定义请求
    let json = $(".create-form-step3").serialize();
    console.log("json : ", json);
    alert(JSON.stringify(json));

    window.location.pathname = "/create3.html";
  },
  false
);
// });
