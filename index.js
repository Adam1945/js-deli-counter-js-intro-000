var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  katzDeli = katzDeliLine;
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}
