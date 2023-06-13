let button_array = document.getElementsByClassName('boton-java');
let render_p = document.getElementById('render');
let render_t = document.getElementById('titulo-render')
let box = document.getElementById('interactive');

const texto_html = 'El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos. Por ejemplo, sus contenidos podrían ser párrafos, una lista con viñetas, o imágenes y tablas de datos.';
const texto_css = 'CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.';
const texto_js = 'JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones y mapas interactivos, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web.';
const texto_git = 'Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente.';
const texto_github = 'Github es una plataforma creada para alojar el código de las aplicaciones de cualquier desarrollador web y, que como usuario, da la opción de descargarse la aplicación o acceder a su perfil para leer o colaborar en el desarrollo de los diferentes proyectos.';
const texto_terminal = 'La terminal o interfaz de línea de comandos (CLI) es una interfaz con la que el usuario interactúa con el ordenador a través de líneas de texto.';

function cambiar_texto (event) {
    let texto_nuevo;
    let titulo_nuevo;
    const id_elemento = event.target.id;
    switch (id_elemento) {
        case 'b-html':
            texto_nuevo = texto_html;
            titulo_nuevo = 'HTML';
            break;
        case 'b-css':
            texto_nuevo = texto_css;
            titulo_nuevo = 'CSS';
            break;
        case 'b-js':
            texto_nuevo = texto_js;
            titulo_nuevo = 'JavaScript';
            break;
        case 'b-git':
            texto_nuevo = texto_git;
            titulo_nuevo = 'Git';
            break;
        case 'b-github':
            texto_nuevo = texto_github;
            titulo_nuevo = 'GitHub';
            break;
        case 'b-terminal':
            texto_nuevo = texto_terminal;
            titulo_nuevo = 'Terminal (CLI)';
            break;
    }
    render_p.innerHTML = texto_nuevo;
    render_t.innerHTML = titulo_nuevo;
    render_t.style.textDecoration = 'underline';
    box.style.display = 'block';

}

for (const button of button_array) {
    button.addEventListener('click', cambiar_texto);
}

let close_buton = document.getElementById('boton-X');
close_buton.onclick = function () {
    box.style.display = 'none';
}