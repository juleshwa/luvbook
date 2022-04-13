/**
 * XMLHttpRequest() init
 * open()
 * onreadystatechange()
 * await request
 */

if (window.location.pathname === '/front-bootstrap/books.html') {
  window.addEventListener('load', function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8888/books');
    xhr.responseType = 'json';
    xhr.onload = () => {
      console.log(xhr.response);
    };
    xhr.send();
  });
}
