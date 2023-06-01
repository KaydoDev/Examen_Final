
function verificar_email(){
    let email=prompt('Ingresa tu correo: '); 
    if(Number(email[0])>=0 || email.search('@cumbre.edu.bo')<0 ||email[0]==' '){
        errorEmail("Correo");
        verificar_email();
    }else{
        return true;
    }
}

function verificar_password(){
    let password=prompt('Ingresa tu contaseña: ');
    if(password.length<8 || password.substr(0,2)!="$*"){
        errorPassword()
        verificar_password();
    }else{
        return true;
    }
}

function verificar_post(){
    let post=prompt('Ingresa el post: ');
    if(post==''){
        errorEmail("Post");
        verificar_post();
    }else{
        return true;
    }
}


function errorEmail(mensaje) {
    let numero=Math.round(Math.random()*10);
    let today = new Date();
    alert(mensaje+" no valido. Vuelva a intentarlo en "+ numero +". \n" +today.toLocaleDateString('en-US'))
}

function errorPassword(){
    alert("Contraseña debil \n Vuelva a intentarlo ")
}

function ingresar(){
    verificar_email()
    verificar_password()

    let create_post=confirm('Desea crear un post.')
    let post="Mi primer post en JS";
    if(create_post){
        verificar_post()
    }
    alert(post);
    post_array=post.split(' ');
    console.warn(post_array);
}


ingresar();




