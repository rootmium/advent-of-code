import * as fs from "node:fs";
let input = fs.readFileSync("./input.txt", "utf-8");

// svr,aaa,fft,ccc,ddd,hub,fff,ggg,out
// svr,aaa,fft,ccc,ddd,hub,fff,hhh,out
// svr,baa,fft,ccc,aee,dac,fff,ggg,out
// svr,aaa,fft,ccc,eee,dac,fff,hhh,out
// svr,bbb,tty,ccc,ddd,hub,fff,ggg,out
// svr,bbb,tty,ccc,ddd,hub,fff,hhh,out
// svr,bbb,tty,ccc,eee,dac,fff,ggg,out
// svr,bbb,tty,ccc,eee,dac,fff,hhh,out

let connections = {};
input
  .trim()
  .split("\n")
  .map((line) => {
    let [device, output] = line.split(": ");
    connections[device] = output.split(" ");
  });

let getAllPath = (startDevice, endDevice) => {
  let cache = {};
  let getPath = (device) => {
    if (device === endDevice) return 1;
    if (device in cache) return cache[device];
    if (!connections[device]) return 0;

    let totalPaths = 0;
    for (let output of connections[device]) {
      totalPaths += getPath(output);
    }

    cache[device] = totalPaths;
    return totalPaths;
  };

  return getPath(startDevice);
};

let fftdac =
  getAllPath("svr", "fft") *
  getAllPath("fft", "dac") *
  getAllPath("dac", "out");

let dacfft =
  getAllPath("svr", "dac") *
  getAllPath("dac", "fft") *
  getAllPath("fft", "out");

console.log(fftdac + dacfft);
