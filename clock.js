setInterval(() => {
    let date = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second:"2-digit"
  };
  let d = date.toLocaleTimeString("en-us", options);
  time.innerText = d;
}, 1000);
