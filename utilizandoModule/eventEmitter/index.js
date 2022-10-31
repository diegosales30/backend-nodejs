const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
  console.log("durante o evento");
});

console.log("antes do evento");

eventEmitter.emit("start");

console.log("depois do evento");
