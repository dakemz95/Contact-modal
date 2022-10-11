document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.modal');
  const options = {}
  const instances = M.Modal.init(elems, options);

  console.log(elems, instances)

  const elem = document.querySelector('#contactUs')
  const instance = M.Modal.getInstance(elem);

  instance.open()
});

