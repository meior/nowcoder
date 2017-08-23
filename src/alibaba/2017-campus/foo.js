/* global document */
function foo(n) {
  return () => {
    const container = document.getElementById('container');
    for (let i = 1; i <= n; i++) {
      ((number) => {
        const btn = document.createElement('button');
        btn.innerText = number;
        btn.addEventListener('click', (event) => {
          console.log(event.target.innerText);
        });
        container.appendChild(btn);
      })(i);
    }

    const btnAll = document.createElement('button');
    btnAll.innerText = 'all';
    btnAll.addEventListener('click', (event) => {
      const btnGroup = event.target.parentNode.childNodes;
      for (let i = 1; i < btnGroup.length; i++) {
        ((time) => {
          setTimeout(() => {
            console.log(btnGroup[time - 1].innerText);
          }, 1000 * (1 + time) * time / 2);
        })(i);
      }
    });
    container.appendChild(btnAll);
  };
}

const bar = foo(5);
bar();
