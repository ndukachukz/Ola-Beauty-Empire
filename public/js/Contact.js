$(() => {
  $("#appoint").click((e) => {
    e.preventDefault();

    console.log("clicked");

    const cname = $("#cname").val();
    const cmail = $("#cmail").val();
    const cdate = $("#cdate").val();

    const data = {
      name: cname,
      mail: cmail,
      date: cdate,
    };

    console.log(data);
    console.log(JSON.stringify(data));

    $.ajax("/", {
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
      success: function () {
        console.log("success");
        alert("Appointment made successfully");
        data.name = "";
        data.mail = "";
        data.date = "";
      },
      error: function () {
        console.log("error");
        alert("an error has occured");
      },
    });
  });
});
