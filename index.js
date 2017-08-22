var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  katzDeli = katzDeliLine;
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing() {
  if(katzDeli.length == 0) {
    return `There is nobody waiting to be served!`
  }
  else {
    return katzDeli[0];
    katzDeli.slice(1);
  }
}
