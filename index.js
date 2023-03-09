document.getElementById('proc-btn').onclick = function handler() {
  const value = document.getElementById('input-n').value;
  let n = parseInt(value);
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res = res * i;
  }
  document.getElementById('proc-result').textContent = res;
};

function getFactorial(n) {
  if (n <= 1) return 1;
  else return n * getFactorial(n - 1);
}

document.getElementById('func-btn').onclick = function handler() {
  const value = document.getElementById('input-n').value;
  let n = parseInt(value);
  const res = getFactorial(n);
  document.getElementById('func-result').textContent = res;
};
