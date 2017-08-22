var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  katzDeliLine = katzDeli;
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing() {
  if(katzDeli.length > 0) {
    return `Currently serving ${katzDeli.shift()}`
  }
  else {
    return `There is nobody waiting to be served!`
  }
}
