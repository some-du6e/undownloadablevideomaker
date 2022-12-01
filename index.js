// some-du6e 2022
// spagetti code moment

function format(url) {
  url = url.replace("https://", "");
  console.log("URL: " + url);
  return url;
}

function formatfinal(url) {
  url = url.replace("%2f", "/");
  url = "https://" + url;
  console.log("URL2: " + url);
  return url;
}
String.prototype.hex = function () {
  var result = "";
  for (var i = 0; i < this.length; i++) {
    result += this.charCodeAt(i).toString(16);
  }
  return result;
};

function listToString(s) {
  var str1;
  str1 = "";

  for (
    // wtf did the python converter do
    var ele, _pj_c = 0, _pj_a = s, _pj_b = _pj_a.length;
    _pj_c < _pj_b;
    _pj_c += 1
  ) {
    ele = _pj_a[_pj_c];
    str1 += ele;
  }

  return str1;
}

function main() {
  var hexstring, link, linklist;
  var output = document.getElementById("output");
  linklist = [];
  link = document.getElementById("vidlink").value;
  link = format(link);

  for (var i = 0, _pj_a = link.length; i < _pj_a; i += 1) {
    // tf is this for loop
    hexstring = "%" + link[i].hex();
    linklist += hexstring;
  }

  link = listToString(linklist);
  link = formatfinal(link);
  if (link == "https://") {
    output.innerHTML = "Invalid Link";
  } else {
    navigator.clipboard.writeText(link);
    output.innerHTML = "Copied to clipboard!";
  }
}
