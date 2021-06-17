/* Nota: ID (#)  y clases (.), (gato y punto respectivamente) */
/* Toda funcion que haga alusion a AJAX no hay que subirla a PythonAnywhere */
/* pues dará un error 404 */
/* ----------------- */  

function llenacaja(){
	var fini = $('#datepicker').val();
	var fini = fini.slice(6,10)+"-"+fini.slice(0, 2)+"-"+fini.slice(3,5);
   	document.getElementById("datepicker").value=fini;
	}

 function llenacaja2(){
	var fenac = $('#datepicker2').val();
	var fenac = fenac.slice(6,10)+"-"+fenac.slice(0, 2)+"-"+fenac.slice(3, 5);
   	document.getElementById("datepicker2").value=fenac;
	}


function prueba() {
	var x = document.getElementById("rut").value
    alert("!! Entró al MYJS.JS ¡¡"+x);
    document.getElementById("rut").focus();
    document.getElementById("rut").style.border = '2px solid red';
}

function validaemail(email) {
	/*alert("email llegó con :"+email);*/
	if(email=="correo"){ 
    	var x = document.getElementById("correo").value
	} else {
    	var x = document.getElementById("correo_apod").value
	}

    if(x!='') {
        var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ( !expr.test(x) ) {
            alert("Error: La dirección de correo " + x + " es incorrecta.");
            document.getElementById("correo").value = "";
        }
    }
}


function validarut_cui() {
	var rut = document.getElementById("rut").value;
	if(document.getElementById("extran").checked) { 	
		return true;
	} else {	
		validarut();
 	}
}


function separadordemiles(input) {
	var num = input.value.replace(/\./g,'');
	/* alert(num); */
}


function validarut_999() {
    /*
	xx = validarut_()
	if(xx == true){
		siexiste(rut)
		return true;
	}else{
		return false;
	}
	*/
}

/* valida rut del paciente desde FICHA_PACIENTES.HTML */
function validarut() {
	var rut = document.getElementById("rut").value 
	document.getElementById("rut").value=rut.toUpperCase()
	if (rut!='') {
		var rexp = new RegExp(/^([0-9])+\-([kK0-9])+$/);
		if(rut.match(rexp)){
			var RUT = rut.split("-");
			//var elRut = RUT[0].toArray();
			var elRut = RUT[0].split('');
			var factor = 2;
			var suma = 0;
			var dv;
			for(i=(elRut.length-1); i>=0; i--){
				factor = factor > 7 ? 2 : factor;
				suma += parseInt(elRut[i])*parseInt(factor++);
			}
			dv = 11 -(suma % 11);
			if(dv == 11){
				dv = 0;
			}else if (dv == 10){
				dv = "K";
			}

			if(dv==0-0) {
				alert("El rut es incorrecto por formato digitado.!!");
				document.getElementById("rut").style.border = '';
				document.getElementById("rut").style.border = '2px solid red';
				return false;
			}

			if(dv == RUT[1].toUpperCase()){
         		document.getElementById("rut").style.border = '';
           		document.getElementById("nombre").focus();
        		return true; 
			}else{         
        		document.getElementById("rut").style.border = '2px solid red';
           		document.getElementById("rut").focus();		
           		document.getElementById("rut").value = '';			
				alert("El rut es incorrecto.!!!");
				return false;
			}
		}else{  
		    document.getElementById("rut").style.border = '2px solid red';
           	document.getElementById("rut").focus();	  
           	document.getElementById("rut").value = ''; 
			alert("RUT incorrecto por formato digitado.!!!");
			return false;
		}
	}	
}

/*
$(document).ready(function(){
   $("#rut").blur(function(evento){
      alert("Ha entrado al puto JQuery");
   });
});
*/

/* valida rut del apoderado desde ficha PACIENTE */
function validarut2() {
	var rut = document.getElementById("rut_apod").value 
	document.getElementById("rut_apod").value=rut.toUpperCase()
	if (rut!='') {
		var rexp = new RegExp(/^([0-9])+\-([kK0-9])+$/);
		if(rut.match(rexp)){
			var RUT = rut.split("-");
			//var elRut = RUT[0].toArray();
			var elRut = RUT[0].split('');
			var factor = 2;
			var suma = 0;
			var dv;
			for(i=(elRut.length-1); i>=0; i--){
				factor = factor > 7 ? 2 : factor;
				suma += parseInt(elRut[i])*parseInt(factor++);
			}
			dv = 11 -(suma % 11);
			if(dv == 11){
				dv = 0;
			}else if (dv == 10){
				dv = "K";
			}
				if(dv == RUT[1].toUpperCase()){
         			document.getElementById("rut_apod").style.border = '';
           			document.getElementById("nombre").focus();
				return true;
			}else{         
        		document.getElementById("rut_apod").style.border = '2px solid red';
           		document.getElementById("rut_apod").focus();		
           		document.getElementById("rut_apod").value = '';			
				alert("Rut incorrecto por Digito Verificador!!");
				return false;
			}

		}else{

		    document.getElementById("rut_apod").style.border = '2px solid red';
           	document.getElementById("rut_apod").focus();	  
           	document.getElementById("rut_apod").value = ''; 
			alert("RUT incorrecto por formato digitado!!");
			return false;
		}
	}	
}

function habilitadeshabilita(campo) {
	var estadoActual = document.getElementById(campo);
	if(estadoActual.disabled)   {
		estadoActual.disabled= false;
	} else {
		estadoActual.disabled= true;
    }
}


// obtiene el focus
function txt_onfocus(txt) {
    txt.style.backgroundColor = " ";
}

// pierde el focus
function txt_onchange(txt)
{
    txt.style.backgroundColor = " ";   
}


function upperCase() {
	var x=document.getElementById("rut").value
	document.getElementById("rut").value=x.toUpperCase()
}

function valida_fono() {
	var fon = document.getElementById("fono_cuid").value;
    if(fon!='') {
		if( (!/^([0-9])*$/.test(fon)) ) {
			alert("El formato del numero telefonico introducido es incorrecto.");
			document.getElementById("fono_cuid").style.border = '2px solid red';
			document.getElementById("fono_cuid").focus();
		}else{
			document.getElementById("fono_cuid").style.border = '';	
		}
	}
}


function confirmar_borrado(nombre) {
	var nombre = $('#nombre').val();
	if(confirm('¿Estas seguro de efectuar el borrado de: '+nombre)) {

	}
}

function confirmar_borrado2(nombre,id) {
	var nombre = document.getElementById("nombre").value; 
    if(confirm('¿Estas seguro de borrar a :'+nombre+' ?')) {
     	var request = $.ajax({
    	    type: "GET",
    	    url: "{% url 'EliminaPac' id %}",
    	    data: {
    	        "csrfmiddlewaretoken": "{{ csrf_token }}",
    	        "id": id                    
    	    },
    		});
   			request.done(function(response) {
   		});
 	}
}

function mayuscula(e) {
	e.value = e.value.toUpperCase();
}


function limpia() {
	document.getElementById("busca").value = " ";
}


/* Valida FICHA de PAUTA*/ 
function ValidarForm() {
	var yace = document.getElementById("yace").value 
	var rut_t1 = document.getElementById("rut_t1").value 
	var rut_t2 = document.getElementById("rut_t2").value 
	var rut_t3 = document.getElementById("rut_t3").value 
	var tipo_turno1 = document.getElementById("tipo_turno1").value 
	var tipo_turno2 = document.getElementById("tipo_turno2").value 
	var tipo_turno3 = document.getElementById("tipo_turno3").value
	var reca_cui = document.getElementById("reca_cui").value


	if (yace == '6'){
		alert("No ha especificado la ESTADIA !!")
		document.getElementById('yace').focus()
		document.getElementById('yace').style.border = '2px solid red';		
		return false;	
	}

	if(rut_t1 == '0-0' && rut_t2 == '0-0' && rut_t3 == '0-0' ){
		alert("Error!!..no ha asignado CUIDADOR");
		return false;
	}

	if(rut_t1 != '0-0' && tipo_turno1 == '0'){
		alert("Error!!..todo cuidador debe tener su respectivo TIPO DE TURNO");
		document.getElementById('tipo_turno1').focus()
		document.getElementById('tipo_turno1').style.border = '2px solid red';		
		return false;
	}

	if(rut_t2 != '0-0' && tipo_turno2 == '0'){
		alert("Error!!..todo cuidador debe tener su respectivo TIPO DE TURNO");
		document.getElementById('tipo_turno2').focus()
		document.getElementById('tipo_turno2').style.border = '2px solid red';		
		return false;
	}

	if(rut_t3 != '0-0' && tipo_turno3 == '0'){
		alert("Error!!..todo cuidador debe tener su respectivo TIPO DE TURNO");
		document.getElementById('tipo_turno3').focus()
		document.getElementById('tipo_turno3').style.border = '2px solid red';		
		return false;
	}


	/* recargo x dia FIN DE SEMANA - DIA FESTIVO - NORMAL */
	if(reca_cui === "0"){
		alert("Defina si esta fecha es: NORMAL - DOMINGO - FESTIVO ");
		document.getElementById('reca_cui').focus()
		document.getElementById('reca_cui').style.border = '2px solid red';
		return false;
	}
}


function confirmaelimpac(nombre,id){
	var opcion=confirm('¿Seguro de borrar a paciente: '+nombre+' ?');
	if (opcion == true) {
      	var request = $.ajax({
            type: 'GET',
            url: "{% url 'Eliminapac_nuevo' %}",
	 	    data: {"id": id },
    	    /*    	
	 	    data: {
    	        "csrfmiddlewaretoken": "{{ csrf_token }}",
    	        "id": id },
			*/
        });
        alert("No funcó!! :"+request);
        request.done(function(response) {
            alert("Registro eliminado");
        });	

 	}else{
		return false;
	}
}

/* para mostrar contraseña durante la digitacion */
function mostrarPassword(){
		var cambio = document.getElementById("txtPassword");
		if(cambio.type == "password"){
			cambio.type = "text";
			$('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
		}else{
			cambio.type = "password";
			$('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
		}
	} 
	$(document).ready(function () {
	//CheckBox mostrar contraseña
	$('#ShowPassword').click(function () {
		$('#Password').attr('type', $(this).is(':checked') ? 'text' : 'password');
	});
});


/* VALIDA FECHA DE INICIO */
function validarFormatoFecha() {
	var fe_ini = document.getElementById("fe_ini").value
    var RegExPattern = /^\d{1,4}\-\d{1,2}\-\d{1,2}$/;
    if (fe_ini.match(RegExPattern)) {
    	document.getElementById("fe_ini").style.border = '';
        return true;
    } else {
		/* document.getElementById('fe_ini').style.border = '2px solid red'; */
      	alert("Error!! formato de FECHA INICIO debe ser aaaa-mm-dd, los separadores son signos menos");
      	return true;
    }
}

/* VALIDA FECHA DE 	VENCIMIENTO CONTRATO */
function valifechavencimiento_contrato() {
	var vence_contrato = document.getElementById("vence_contrato").value
    var RegExPattern = /^\d{1,4}\-\d{1,2}\-\d{1,2}$/;
    if (vence_contrato.match(RegExPattern)) {
    	document.getElementById("vence_contrato").style.border = '';
        return true;
    } else {
		/* document.getElementById('fe_ini').style.border = '2px solid red'; */
      	alert("Error!! formato de VENCIMIENTO_CONTRATO debe ser aaaa-mm-dd, los separadores son signos menos");
      	return true;
    }
}


/* VALIDA FECHA DE NACIMIENTO */
function validarFormatoFecha2() {
	var fe_nac = document.getElementById("fe_nac").value
    var RegExPattern = /^\d{1,4}\-\d{1,2}\-\d{1,2}$/;
    if (fe_nac.match(RegExPattern)) {
    	document.getElementById("fe_nac").style.border = '';
        return true;
    } else {
		document.getElementById('fe_nac').style.border = '2px solid red';
      	alert("Error!! formato de FECHA de NACIMIENTO debe ser aaaa-mm-dd, los separadores son signos menos");
      	return true;
     }
}

/* valida fecha cheque - ficha paciente */
function validarFormatoFecha3() {
	var fe_nac = document.getElementById("fecha_cheque").value
    var RegExPattern = /^\d{1,4}\-\d{1,2}\-\d{1,2}$/;
    if (fe_nac.match(RegExPattern)) {
    	document.getElementById("fecha_cheque").style.border = '';
        return true;
    } else {
		document.getElementById('fecha_cheque').style.border = '2px solid red';
      	alert("Error!! formato de FECHA CHEQUE debe ser aaaa-mm-dd, los separadores son signos menos (solo en caso de cheques)");
		return true;
    }
}

/* VALIDA FECHA DE ALTA DEL PACIENTE */
function validarFormatoFecha4(campo) {
	if (campo == "fe_alta") {
		var fe_alta = document.getElementById("fe_alta").value
    	var RegExPattern = /^\d{1,4}\-\d{1,2}\-\d{1,2}$/;
    	if (fe_alta.match(RegExPattern)|| fe_alta === "" ) {
    		document.getElementById("fe_alta").style.border = '';
    	    return true;
    	} else {
			document.getElementById('fe_alta').style.border = '2px solid red';
    	  	alert("Error!! formato de FECHA ALTA debe ser aaaa-mm-dd, los separadores deben ser signos menos");
  			return true;    	
    	}
    }	
}


function validarchivo() {
	/* var archivo = $('input[name="foto"]').val();  */
	var archivo = document.getElementById("fotito").value
	if(archivo == ""){
		alert("!! No ha seleccionado archivo para subir.. !! ");
		return false;
	}else{
		alert("El archivo próximo a subir es: "+archivo)
		return true;
	}
}	

/* forma de pago */
function validabono() {
	var pagacon = document.getElementById("abon").value
	if(pagacon != "2") {
		document.getElementById("cheque").value = ""
		document.getElementById("bco").value = "9"
		document.getElementById("fecha_cheque").value = ""

		document.getElementById("cheque").readOnly = true;
		document.getElementById("bco").readOnly = true;
		document.getElementById("fecha_cheque").readOnly = true;

	}else{
		document.getElementById("cheque").readOnly = false;
		document.getElementById("bco").readOnly = false;
		document.getElementById("fecha_cheque").readOnly = false;
	}
}	


function miniventana() {
	/* alert("hola");  */
	/* window.open(url,"ventana1","width=300,height=300,scrollbars=NO");  */
	window.open("http://www.desarrolloweb.com" , "ventana1" , "width=120,height=300,scrollbars=NO") 
}



function oculta() {
 	document.getElementById('div1').style.display = 'none';
}


function confirmar_borrado4(nombre,id) {
	var nombre = document.getElementById("nombre").value; 
    if(confirm('¿Estas seguro de borrar a :'+nombre+' ?')) {
     	var request = $.ajax({
    	    type: "GET",
    	    url: "{% url 'EliminaPac' id %}",
    	    data: {
    	        "csrfmiddlewaretoken": "{{ csrf_token }}",
    	        "id": id                    
    	    },
    		});
   			request.done(function(response) {
   		});
 	}
}

/* para probar */
/*
var rut = "145694841";
// retorna true si es válido
if($.validateRut(rut)) {
	alert("El rut es válido!");
}
*/

/*
$(document).ready(function(){
 	$('#rut').blur(function(evento){
	alert("..entró,..y ahora que? !!");
  	});
});
*/


/*
$(document).ready(function(){
	$("#rut").blur(function(evento){
	var rut = $("#rut").val()	
		$.ajax({
			url:'{% url siexisterut99 %}',
			type:'get',
			data : {rut: rut},
			timeout: 10000,	
	
			beforeSend: function(){
				$("#resultado").html("Buscando rut="+rut); 
			},

         	success: function(data){
            	alert("Entró al success");
          	},
  	
		});

    });
});
*/

function confirmaelimcui2(nombre,id){
	var opcion=confirm('¿Seguro de borrar a paciente: '+nombre+' ?');
	if (opcion == true) {
      	var request = $.ajax({
            type: 'GET',
            url: "{% url 'Eliminapac_nuevo' %}",
	 	    data: {"id": id },
    	    /*    	
	 	    data: {
    	        "csrfmiddlewaretoken": "{{ csrf_token }}",
    	        "id": id },
			*/
        });
        alert("No funcó!! :"+request);
        request.done(function(response) {
            alert("Registro eliminado");
        });	

 	}else{
		return false;
	}
}


/* Toma el focus del objeto */
function ayuda4(mensajetexto){
	/* lo despliega en el span de la PLANTILLA_BASE */
	$('#mensaje').html(mensajetexto);
}

/* Abandona el focus del objeto */
function ayuda5(){
	/* lo despliega en el span de la PLANTILLA_BASE */
	$('#mensaje').html("");
}


/* NO BORRAR */
function confirmaelimcui(){
	var nombre = document.getElementById("nombre").value; 
	$('#mensaje').html("No está autorizado para borrar !!");
	/* en plantilla HTML: <div style="color:#F7021C" id="mensaje"></div> 
	Y LA ACCION QUE DISPARA: onclick="confirmaelimcui();"
	*/
}


function ValidaFichaReceta() {
	var celu = document.getElementById("celu").value
    var tele = ["+56"];
 	$("#celu").celu({
      source: tele
    });
}

/* valida cada caracter que se digita sea un numero */
function valideKey(evt){
    var code = (evt.which) ? evt.which : evt.keyCode;
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // is a number.
      return true;
    } else{ // other keys.
      return false;
    }
}


/* VALIDA LOS DATOS PERSONALES DEL CLIENTE */
function val_datoscliente() {
	var celu = document.getElementById("celu").value;
	var hora_sel = document.getElementById("combo-aque-hora").value;	
	var radios = document.getElementsByClassName("laburohoy");
	var digitos = celu.length;
	var sw = 0;
	if(digitos!=0){
		if(digitos != 9){
			Swal.fire({
			  position: 'top-end',
			  icon: 'error',
			  title: 'El número de dígitos del celu es erróneo!!, En total son nueve, usted ha digitado:' +digitos,
			  showConfirmButton: true,
			  confirmButtonText: 'Aceptar',
			  /*timer: 4500*/
			})
			return false;
		}
	}	

	if(hora_sel == "hora") {
			Swal.fire({
			  position: 'top-end',
			  icon: 'error',
			  title: 'Debes seleccionar la hora en que necesitas tu pedido',
			  showConfirmButton: true,
			  confirmButtonText: 'Aceptar',
			  /*timer: 4500*/
			})
			return false;
	}

    if($("#laburohoy1").is(':checked') || $("#laburohoy2").is(':checked')) {  
    } else {
		Swal.fire({
		  position: 'top-end',
		  icon: 'error',
		  title: 'Debes seleccionar una forma de pago',
		  showConfirmButton: true,
		  confirmButtonText: 'Aceptar',
		  /*timer: 4500*/
		})
		return false;
    }  

	if(sw==0){
		Swal.fire({
		  icon: 'error',
		  position: 'top-end',
		  title: 'Hasta aquí la demo del sistema. ¿Como estubo?!!!',
		  footer: '<a href>Hay que esperar a don Gabriel que siga desarrollando este sistema</a>',
		  allowOutsideClick:false,
		  confirmButtonText: "Aceptar",
		  width: '400px'
		})
		return false;
	}	
}  /*--FIN DE LA FUNCION --*/


function mayusculas() {
	var x=document.getElementById("nombre").value
	document.getElementById("nombre").value=x.toUpperCase()
}


function oculta() {
	document.getElementById('form-register').style.display == 'none' 
}

function selecciona(codigo) {
	alert("valor del combo: "+ id+" "+codigo);
   	/* document.getElementById("datepicker2").value=fenac; */
	alert("x teiene el valor:"+x)
}


/* botones ELIMINA */
function elimina(id) {
	if (id=="elimina1")
		document.getElementById("caja1-seleccionada").value = ""; 

	else if (id=="elimina2")
		document.getElementById("caja2-seleccionada").value = ""; 

	else if (id=="elimina3")
		document.getElementById("caja3-seleccionada").value = ""; 

	else if (id=="elimina4")
		document.getElementById("caja4").value = ""; 

	return false;
}


$(document).ready(function () {
    $("#id_promo").on('change', function () {            
        var pr = $(this).val();
		if ($('#caja1-seleccionada').val().length == 0 && pr != "SELECCIONE PROMO...") 
			document.getElementById("caja1-seleccionada").value = pr;

        else if ($('#caja2-seleccionada').val().length == 0 && pr != "SELECCIONE PROMO...") 
        	document.getElementById("caja2-seleccionada").value = pr;
        
        else if  ($('#caja3-seleccionada').val().length == 0 && pr != "SELECCIONE PROMO...") 
        	document.getElementById("caja3-seleccionada").value = pr;

        else if  ($('#caja4').val().length == 0 && pr != "SELECCIONE PROMO...") 
        	document.getElementById("caja4").value = pr;

		document.getElementById("id_promo").value = "SELECCIONE PROMO...";        

	});
});


/* ENVOLTURAS - Y RELLENOS ENVOLTURAS - Y RELLENOS ENVOLTURAS - Y RELLENOS ENVOLTURAS - Y RELLENOS */
/* Puebla ultimas cajas de sub-totales */


/* SELECCIONA ENVOLTORIOS PARA CAMBIO PROMO1  - pone el subtotal en la columna3 */
$(document).ready(function () {
    $("#id_env1").on('change', function () { 
       	var cmb = $(this).val();
    	var xx = sweetalert_maximocambio(cmb,1);
    	if(xx == false) {
    		document.getElementById("subtot1").value = cmb; /*hace el cambio*/
			suma_cambios();
		}
	});

    $("#id_env2").on('change', function () {   
	    var cmb = $(this).val();
    	var xx = sweetalert_maximocambio(cmb,1);
    	if(xx == false) {
    		document.getElementById("subtot2").value = cmb; /*hace el cambio*/
			suma_cambios();
		}
	});

    /* PARA PRUEBAS */
    $("#id_env3").on('change', function () {            
    	var cmb = $(this).val();
    	var xx = sweetalert_maximocambio(cmb,1);
    	if(xx == false) {
    		document.getElementById("subtot3").value = cmb; /*hace el cambio*/
 			suma_cambios();
 		}else{
 			document.getElementById("id_env3").value = "--cambia por--";
 		}
	});

    $("#id_env4").on('change', function () {            
    	var cmb = $(this).val();
    	var xx = sweetalert_maximocambio(cmb,1);
    	if(xx == false) {
    		document.getElementById("subtot4").value = cmb;  /*hace el cambio*/
			suma_cambios();
		}
	});

    $("#id_env5").on('change', function () {            
        var cmb = $(this).val();
    	var xx = sweetalert_maximocambio(cmb,1);
    	if(xx == false) {
    		document.getElementById("subtot5").value = cmb; /*hace el cambio*/
 			suma_cambios();
 		}
	});

    $("#id_env6").on('change', function () {            
        var cmb = $(this).val();
    	var xx = sweetalert_maximocambio(cmb,1);
    	if(xx == false) {
    		document.getElementById("subtot6").value = cmb; /*hace el cambio*/
 			suma_cambios();
 		}
	});

    $("#id_env7").on('change', function () {            
        var cmb = $(this).val();
    	var xx = sweetalert_maximocambio(cmb,1);
    	if(xx == false) {
    		document.getElementById("subtot7").value = cmb; /*hace el cambio*/
 			suma_cambios();
 		}
	});


    /* RELLENOS PROMO1 -  pone el subtotal en la columna3 */
    $("#relle1_tot").on('change', function () {            
        var rell = $(this).val();
        var xx = sweetalert_maximocambio(rell,1);
    	if(xx == false) {
	    	document.getElementById("sub1_rell").value = rell;
 			suma_cambios();
 		}
 	});

	$("#relle2_tot").on('change', function () {            
        var rell = $(this).val();
        var xx = sweetalert_maximocambio(rell,1);
    	if(xx == false) {        
    		document.getElementById("sub2_rell").value = rell;
 			suma_cambios();
 		}
	});

    $("#relle3_tot").on('change', function () {            
        var rell = $(this).val();
        var xx = sweetalert_maximocambio(rell,1);
    	if(xx == false) {
    		document.getElementById("sub3_rell").value = rell;
 			suma_cambios();
 		}
	});

    $("#relle4_tot").on('change', function () {            
        var rell = $(this).val();
        var xx = sweetalert_maximocambio(rell,1);
    	if(xx == false) {
    		document.getElementById("sub4_rell").value = rell;
 			suma_cambios();
 		}
	});

    $("#relle5_tot").on('change', function () {            
        var rell = $(this).val();
        var xx = sweetalert_maximocambio(rell,1);
    	if(xx == false) {
    		document.getElementById("sub5_rell").value = rell;
 			suma_cambios();
 		}
	});

    $("#relle6_tot").on('change', function () {            
        var rell = $(this).val();
        var xx = sweetalert_maximocambio(rell,1);
    	if(xx == false) {
    		document.getElementById("sub6_rell").value = rell;
 			suma_cambios();
 		}
	});

    $("#relle7_tot").on('change', function () {            
        var rell = $(this).val();
        var xx = sweetalert_maximocambio(rell,1);
    	if(xx == false) {
    		document.getElementById("sub7_rell").value = rell;
 			suma_cambios();
 		}
	});


    /* ENVOLTURAS PROMO2   - pone el subtotal en la columna3 */
    $("#id_env1_2").on('change', function () {            
        var cmb = $(this).val();
        var xx = sweetalert_maximocambio(cmb,2);
    	if(xx == false) {
    		document.getElementById("subtot1_2").value = cmb;
  			suma_cambios();
  		}
	});
    $("#id_env2_2").on('change', function () {            
        var cmb = $(this).val();
        var xx = sweetalert_maximocambio(cmb,2);
    	if(xx == false) {                
    		document.getElementById("subtot2_2").value = cmb;
 			suma_cambios();
 		}
	});
    $("#id_env3_2").on('change', function () {            
        var cmb = $(this).val();
        var xx = sweetalert_maximocambio(cmb,2);
    	if(xx == false) {                                
    		document.getElementById("subtot3_2").value = cmb;
 			suma_cambios();
 		}
	});

    $("#id_env4_2").on('change', function () {            
        var cmb = $(this).val();
        var xx = sweetalert_maximocambio(cmb,2);
    	if(xx == false) {                
    		document.getElementById("subtot4_2").value = cmb;
 			suma_cambios();
 		}
	});

    $("#id_env5_2").on('change', function () {            
        var cmb = $(this).val();
        var xx = sweetalert_maximocambio(cmb,2);        
    	if(xx == false) {                        
    		document.getElementById("subtot5_2").value = cmb;
 			suma_cambios();
 		}
	});
    $("#id_env6_2").on('change', function () {            
        var cmb = $(this).val();
        var xx = sweetalert_maximocambio(cmb,2);
    	if(xx == false) {                
    		document.getElementById("subtot6_2").value = cmb;
 			suma_cambios();
 		}
	});

    $("#id_env7_2").on('change', function () {            
        var cmb = $(this).val();
        var xx = sweetalert_maximocambio(cmb,2);
    	if(xx == false) {
    		document.getElementById("subtot7_2").value = cmb;
 			suma_cambios();
 		}
	});

    /* RELLENOS PROMO2  - pone el subtotal en la columna3 */
    $("#relle1_tot2").on('change', function () {            
        var rell = $(this).val();
        var xx = sweetalert_maximocambio(rell,2);
    	if(xx == false) {
    		document.getElementById("sub1_rell2").value = rell;
 			suma_cambios();
 		}
	});
    $("#relle2_tot2").on('change', function () {            
        var rell = $(this).val();
        var xx = sweetalert_maximocambio(rell,2);
    	if(xx == false) {
    		document.getElementById("sub2_rell2").value = rell;
 			suma_cambios();
 		}
	});
    $("#relle3_tot2").on('change', function () {            
        var rell = $(this).val();
        var xx = sweetalert_maximocambio(rell,2);
    	if(xx == false) {                
    		document.getElementById("sub3_rell2").value = rell;
 			suma_cambios();
 		}
	});
    $("#relle4_tot2").on('change', function () {            
        var rell = $(this).val();
        var xx = sweetalert_maximocambio(rell,2);
    	if(xx == false) {                
    		document.getElementById("sub4_rell2").value = rell;
 			suma_cambios();
 		}
	});
    $("#relle5_tot2").on('change', function () {            
        var rell = $(this).val();
        var xx = sweetalert_maximocambio(rell,2);
    	if(xx == false) {                
    		document.getElementById("sub5_rell2").value = rell;
 			suma_cambios();
 		}
	});
    $("#relle6_tot2").on('change', function () {            
        var rell = $(this).val();
        var xx = sweetalert_maximocambio(rell,2);
    	if(xx == false) {                
    		document.getElementById("sub6_rell2").value = rell;
 			suma_cambios();
 		}	
	});
    $("#relle7_tot2").on('change', function () {            
        var rell = $(this).val();
        var xx = sweetalert_maximocambio(rell,2);
    	if(xx == false) {                
    		document.getElementById("sub7_rell2").value = rell;
 			suma_cambios();
 		}
	});


    /* ENVOLTURAS PROMO3   - pone el subtotal en la columna3 */
    $("#id_env1_3").on('change', function () {            
        var cmb = $(this).val();
        var xx = sweetalert_maximocambio(cmb,3);
    	if(xx == false) {                
    		document.getElementById("subtot1_3").value = cmb;
  			suma_cambios();
  		}
	});
    $("#id_env2_3").on('change', function () {            
        var cmb = $(this).val();
        var xx = sweetalert_maximocambio(cmb,3);
    	if(xx == false) {                                
    		document.getElementById("subtot2_3").value = cmb;
 			suma_cambios();
 		}
	});
    $("#id_env3_3").on('change', function () {            
        var cmb = $(this).val();
        var xx = sweetalert_maximocambio(cmb,3);
    	if(xx == false) {                                                
    		document.getElementById("subtot3_3").value = cmb;
 			suma_cambios();
 		}
	});

    $("#id_env4_3").on('change', function () {            
        var cmb = $(this).val();
        var xx = sweetalert_maximocambio(cmb,3);
    	if(xx == false) {
    		document.getElementById("subtot4_3").value = cmb;
 			suma_cambios();
 		}
	});

    $("#id_env5_3").on('change', function () {            
        var cmb = $(this).val();
        var xx = sweetalert_maximocambio(cmb,3);
    	if(xx == false) {                
    		document.getElementById("subtot5_3").value = cmb;
 			suma_cambios();
 		}
	});
    $("#id_env6_3").on('change', function () {            
        var cmb = $(this).val();
        var xx = sweetalert_maximocambio(cmb,3);
    	if(xx == false) {                
    		document.getElementById("subtot6_3").value = cmb;
 			suma_cambios();
 		}
	});

    $("#id_env7_3").on('change', function () {            
        var cmb = $(this).val();
        var xx = sweetalert_maximocambio(cmb,3);
    	if(xx == false) {                
    		document.getElementById("subtot7_3").value = cmb;
 			suma_cambios();
 		}
	});


    /* RELLENOS PROMO3 - pone el subtotal en la columna3 */
    $("#relle1_tot3").on('change', function () {            
        var rell = $(this).val();
        var xx = sweetalert_maximocambio(rell,3);
    	if(xx == false) {
    		document.getElementById("sub1_rell3").value = rell;
 			suma_cambios();
 		}
	});

    $("#relle2_tot3").on('change', function () {            
        var rell = $(this).val();
        var xx = sweetalert_maximocambio(rell,3);
    	if(xx == false) {                
    		document.getElementById("sub2_rell3").value = rell;
 			suma_cambios();
 		}
	});
    $("#relle3_tot3").on('change', function () {            
        var rell = $(this).val();
        var xx = sweetalert_maximocambio(rell,3);
       	if(xx == false) {        
    		document.getElementById("sub3_rell3").value = rell;
 			suma_cambios();
 		}
	});
    $("#relle4_tot3").on('change', function () {            
        var rell = $(this).val();
        var xx = sweetalert_maximocambio(rell,3);
        if(xx == false) {        
    		document.getElementById("sub4_rell3").value = rell;
 			suma_cambios();
 		}
	});
    $("#relle5_tot3").on('change', function () {            
        var rell = $(this).val();
        var xx = sweetalert_maximocambio(rell,3);
        if(xx == false) {
    		document.getElementById("sub5_rell3").value = rell;
 			suma_cambios();
 		}
	});
    $("#relle6_tot3").on('change', function () {            
        var rell = $(this).val();
        var xx = sweetalert_maximocambio(rell,3);
        if(xx == false) {
    		document.getElementById("sub6_rell3").value = rell;
 			suma_cambios();
 		}
	});
    $("#relle7_tot3").on('change', function () {            
        var rell = $(this).val();
        var rell = $(this).val();
        if(xx == false) {
    		document.getElementById("sub7_rell3").value = rell;
 			suma_cambios();
 		}
	});

    /* ADICIONALES */
    $("#cant1_adicio").on('change', function () {            
        var adic = $(this).val();
   		if (adic != "--seleccione--"){ 
    		document.getElementById("sub1_adicio").value = adic;
    	}else{	
    		document.getElementById("sub1_adicio").value = '0';
    	}
   		suma_cambios();
	});

    $("#cant2_adicio").on('change', function () {            
        var adic = $(this).val();
   		if (adic != "--seleccione--"){ 
    		document.getElementById("sub2_adicio").value = adic;
    	}else{	
    		document.getElementById("sub2_adicio").value = '0';
    	}
   		suma_cambios();
	});

    $("#cant3_adicio").on('change', function () {            
        var adic = $(this).val();
   		if (adic != "--seleccione--"){ 
    		document.getElementById("sub3_adicio").value = adic;
    	}else{	
    		document.getElementById("sub3_adicio").value = '0';
    	}
   		suma_cambios();
	});

});

/*controla los maximos cambios permitidos*/
function ncambios_yahechos(nprom) {
	/* contabiliza cambios en envoltorios PROMO1 */
	var ene = ['1','2','3','4','5','6','7'];

	/* CONTABILIZA PROMO1 ENVOLTURAS Y RELLENOS */
	var ene_cambios = 0;
	if(nprom==1) {
		for (i in ene) {
			if(document.getElementById("subtot"+ene[i]).value != 0) {
				ene_cambios = ene_cambios + 1; 
			}
		}
		/* contabiliza cambios en rellenos PROMO1 */
		for (i in ene) {
			if(document.getElementById("sub"+ene[i]+"_rell").value != 0) {
				ene_cambios = ene_cambios + 1; 
			}
		}
		return ene_cambios;
	}

	/* CONTABILIZA PROMO2 ENVOLTURAS Y RELLENOS */
	if(nprom==2) {
		for (i in ene) {
			//zz = document.getElementById("subtot"+ene[i])+"_2";
			if(document.getElementById("subtot"+ene[i]+"_2").value != 0) {
				ene_cambios = ene_cambios + 1; 
			}
		}
		/* contabiliza cambios en rellenos PROMO2 */
		for (i in ene) {
			if(document.getElementById("sub"+ene[i]+"_rell2").value != 0) {
				ene_cambios = ene_cambios + 1; 
			}
		}
 		return ene_cambios;
	}

	/* CONTABILIZA PROMO3 ENVOLTURAS Y RELLENOS */
	if(nprom==3) {
		for (i in ene) {
			if(document.getElementById("subtot"+ene[i]+"_3").value != 0) {
				ene_cambios = ene_cambios + 1; 
			}
		}
		/* contabiliza cambios rellenos PROMO3 */
		for (i in ene) {
			if(document.getElementById("sub"+ene[i]+"_rell3").value != 0) {
				ene_cambios = ene_cambios + 1; 
			}
		}
		return ene_cambios;
	}

}


/* SUMA FINAL PARA EL TOTAL DE LA(S) PROMOS PEDIDAS */
function suma_cambios() {
    var vtot_aux = document.getElementById("vtot_aux").value;
    var npromo = document.getElementById("npromo").value;
    var cmb1    = document.getElementById("subtot1").value;
    var cmb2    = document.getElementById("subtot2").value;
    var cmb3    = document.getElementById("subtot3").value;
    var cmb4    = document.getElementById("subtot4").value;
    var cmb5    = document.getElementById("subtot5").value;
    var cmb6    = document.getElementById("subtot6").value;
    var cmb7    = document.getElementById("subtot7").value;
    var rell1   = document.getElementById("sub1_rell").value;
    var rell2   = document.getElementById("sub2_rell").value;
    var rell3   = document.getElementById("sub3_rell").value;
    var rell4   = document.getElementById("sub4_rell").value;
    var rell5   = document.getElementById("sub5_rell").value;
    var rell6   = document.getElementById("sub6_rell").value;
    var rell7   = document.getElementById("sub7_rell").value;
    var adicio1 = document.getElementById("sub1_adicio").value;
    var adicio2 = document.getElementById("sub2_adicio").value;
    var adicio3 = document.getElementById("sub3_adicio").value; 

	var new_tot1 =  parseInt(vtot_aux) + parseInt(cmb1) + parseInt(cmb2) +
 		parseInt(cmb3)+ parseInt(cmb4) + parseInt(cmb5) + parseInt(cmb6) + parseInt(cmb7)+
		parseInt(rell1) + parseInt(rell2) + parseInt(rell3)+ parseInt(rell4) +
		parseInt(rell5) + parseInt(rell6) + parseInt(rell7) ;

	var new_tot = new_tot1;	
	
	if(parseInt(npromo) >= 2) { 
		var cmb1_2  = document.getElementById("subtot1_2").value; 
		var cmb2_2  = document.getElementById("subtot2_2").value;
		var cmb3_2  = document.getElementById("subtot3_2").value; 
		var cmb4_2  = document.getElementById("subtot4_2").value; 
		var cmb5_2  = document.getElementById("subtot5_2").value; 
		var cmb6_2  = document.getElementById("subtot6_2").value; 
		var cmb7_2  = document.getElementById("subtot7_2").value; 

    	var rell1_2   = document.getElementById("sub1_rell2").value;
    	var rell2_2   = document.getElementById("sub2_rell2").value;
    	var rell3_2   = document.getElementById("sub3_rell2").value;
    	var rell4_2   = document.getElementById("sub4_rell2").value;
    	var rell5_2   = document.getElementById("sub5_rell2").value;
    	var rell6_2   = document.getElementById("sub6_rell2").value;
    	var rell7_2   = document.getElementById("sub7_rell2").value;

 		var new_tot2 = parseInt(cmb1_2) + parseInt(cmb2_2) +
 		parseInt(cmb3_2) + parseInt(cmb4_2) + parseInt(cmb5_2) + parseInt(cmb6_2) + parseInt(cmb7_2)+
		parseInt(rell1_2) + parseInt(rell2_2) + parseInt(rell3_2)+ parseInt(rell4_2) +
		parseInt(rell5_2) + parseInt(rell6_2) + parseInt(rell7_2);

		var new_tot = new_tot1 + new_tot2;	
	}	

	if(parseInt(npromo) >= 3) { 
		var cmb1_3  = document.getElementById("subtot1_3").value; 
		var cmb2_3  = document.getElementById("subtot2_3").value;
		var cmb3_3  = document.getElementById("subtot3_3").value; 
		var cmb4_3  = document.getElementById("subtot4_3").value; 
		var cmb5_3  = document.getElementById("subtot5_3").value; 
		var cmb6_3  = document.getElementById("subtot6_3").value; 
		var cmb7_3  = document.getElementById("subtot7_3").value; 

    	var rell1_3   = document.getElementById("sub1_rell3").value;
    	var rell2_3   = document.getElementById("sub2_rell3").value;
    	var rell3_3   = document.getElementById("sub3_rell3").value;
    	var rell4_3   = document.getElementById("sub4_rell3").value;
    	var rell5_3   = document.getElementById("sub5_rell3").value;
    	var rell6_3   = document.getElementById("sub6_rell3").value;
    	var rell7_3   = document.getElementById("sub7_rell3").value;

 		var new_tot3 = parseInt(cmb1_3) + parseInt(cmb2_3) +
 		parseInt(cmb3_3) + parseInt(cmb4_3) + parseInt(cmb5_3) + parseInt(cmb6_3) + parseInt(cmb7_3)+
		parseInt(rell1_3) + parseInt(rell2_3) + parseInt(rell3_3)+ parseInt(rell4_3) +
		parseInt(rell5_3) + parseInt(rell6_3) + parseInt(rell7_3);

		var new_tot = new_tot1 + new_tot2 + new_tot3;	
	}	

	var new_tot = new_tot + parseInt(adicio1) + parseInt(adicio2) + parseInt(adicio3); 

	/* mensaje swalert */
  	valor_totalizando(vtot_aux,new_tot);

	document.getElementById('vtot').value = new_tot.toString();
	document.getElementById('vtot_tot').value = new_tot.toString();
}


/* OCULTA ROLLS (que no alcanzan los 7) */
$(document).ready(function () {
	/* PROMO1 ENVOLTORIOS */
	if(document.getElementById("caja3").value === "readonly") {
		document.getElementById('caja3').style.display = 'none';
		document.getElementById('id_env3').style.display = 'none';
		document.getElementById('subtot3').style.display = 'none';
	}

	if(document.getElementById("caja4").value === "readonly") {
		document.getElementById('caja4').style.display = 'none';
		document.getElementById('id_env4').style.display = 'none';
		document.getElementById('subtot4').style.display = 'none';
	}
	if(document.getElementById("caja5").value === "readonly") {
		document.getElementById('caja5').style.display = 'none';
		document.getElementById('id_env5').style.display = 'none';
		document.getElementById('subtot5').style.display = 'none';
	}
	if(document.getElementById("caja6").value === "readonly") {
		document.getElementById('caja6').style.display = 'none';
		document.getElementById('id_env6').style.display = 'none';
		document.getElementById('subtot6').value = '0';
		document.getElementById('subtot6').style.display = 'none';
	}
	if(document.getElementById("caja7").value === "readonly") {
		document.getElementById('caja7').style.display = 'none';
		document.getElementById('id_env7').style.display = 'none';
		document.getElementById('subtot7').style.display = 'none';
	}
	
	/* PROMO1 RELLENOS */
	if(document.getElementById("caja3").value === "readonly") {
		document.getElementById('relle3').style.display = 'none';
		document.getElementById('relle3_tot').style.display = 'none';
		document.getElementById('sub3_rell').style.display = 'none';
	}

	if(document.getElementById("caja4").value === "readonly") {
		document.getElementById('relle4').style.display = 'none';
		document.getElementById('relle4_tot').style.display = 'none';
		document.getElementById('sub4_rell').style.display = 'none';
	}
	
	if(document.getElementById("caja5").value === "readonly") {
		document.getElementById('relle5').style.display = 'none';
		document.getElementById('relle5_tot').style.display = 'none';
		document.getElementById('sub5_rell').style.display = 'none';
	}

	if(document.getElementById("caja6").value === "readonly") {
		document.getElementById('relle6').style.display = 'none';
		document.getElementById('relle6_tot').style.display = 'none';
		document.getElementById('sub6_rell').style.display = 'none';
	}
	if(document.getElementById("caja7").value === "readonly") {
		document.getElementById('relle7').style.display = 'none';
		document.getElementById('relle7_tot').style.display = 'none';
		document.getElementById('sub7_rell').style.display = 'none';
	}

	/* PROMO2 ENVOLTURAS */
	if(document.getElementById("caja3_2").value === "readonly") {
		document.getElementById('caja3_2').style.display = 'none';
		document.getElementById('id_env3_2').style.display = 'none';
		document.getElementById('subtot3_2').style.display = 'none';
	}

	if(document.getElementById("caja4_2").value === "readonly") {
		document.getElementById('caja4_2').style.display = 'none';
		document.getElementById('id_env4_2').style.display = 'none';
		document.getElementById('subtot4_2').style.display = 'none';
	}

	if(document.getElementById("caja5_2").value === "readonly") {
		document.getElementById('caja5_2').style.display = 'none';
		document.getElementById('id_env5_2').style.display = 'none';
		document.getElementById('subtot5_2').style.display = 'none';
	}

	if(document.getElementById("caja6_2").value === "readonly") {
		document.getElementById('caja6_2').style.display = 'none';
		document.getElementById('id_env6_2').style.display = 'none';
		document.getElementById('subtot6_2').style.display = 'none';
	}
	if(document.getElementById("caja7_2").value === "readonly") {
		document.getElementById('caja7_2').style.display = 'none';
		document.getElementById('id_env7_2').style.display = 'none';
		document.getElementById('subtot7_2').style.display = 'none';
	}

	/* PROMO2 RELLENOS */
	if(document.getElementById("caja3_2").value === "readonly") {
		document.getElementById('relle3_2').style.display = 'none';
		document.getElementById('relle3_tot2').style.display = 'none';
		document.getElementById('sub3_rell2').style.display = 'none';
	}
	if(document.getElementById("caja4_2").value === "readonly") {
		document.getElementById('relle4_2').style.display = 'none';
		document.getElementById('relle4_tot2').style.display = 'none';
		document.getElementById('sub4_rell2').style.display = 'none';
	}
	if(document.getElementById("caja5_2").value === "readonly") {
		document.getElementById('relle5_2').style.display = 'none';
		document.getElementById('relle5_tot2').style.display = 'none';
		document.getElementById('sub5_rell2').style.display = 'none';
	}
	if(document.getElementById("caja6_2").value === "readonly") {
		document.getElementById('relle6_2').style.display = 'none';
		document.getElementById('relle6_tot2').style.display = 'none';
		document.getElementById('sub6_rell2').style.display = 'none';
	}
	if(document.getElementById("caja7_2").value === "readonly") {
		document.getElementById('relle7_2').style.display = 'none';
		document.getElementById('relle7_tot2').style.display = 'none';
		document.getElementById('sub7_rell2').style.display = 'none';
	}

	/* PROMO3 ENVOLTURAS */
	if(document.getElementById("caja3_3").value === "readonly") {
		document.getElementById('caja3_3').style.display = 'none';
		document.getElementById('id_env3_3').style.display = 'none';
		document.getElementById('subtot3_3').style.display = 'none';
	}
	if(document.getElementById("caja4_3").value === "readonly") {
		document.getElementById('caja4_3').style.display = 'none';
		document.getElementById('id_env4_3').style.display = 'none';
		document.getElementById('subtot4_3').style.display = 'none';
	}
	if(document.getElementById("caja5_3").value === "readonly") {
		document.getElementById('caja5_3').style.display = 'none';
		document.getElementById('id_env5_3').style.display = 'none';
		document.getElementById('subtot5_3').style.display = 'none';
	}
	if(document.getElementById("caja6_3").value === "readonly") {
		document.getElementById('caja6_3').style.display = 'none';
		document.getElementById('id_env6_3').style.display = 'none';
		document.getElementById('subtot5_3').style.display = 'none';
	}
	if(document.getElementById("caja7_3").value === "readonly") {
		document.getElementById('caja7_3').style.display = 'none';
		document.getElementById('id_env7_3').style.display = 'none';
		document.getElementById('subtot7_3').style.display = 'none';
	}

	/* PROMO3 RELLENOS */
	if(document.getElementById("caja3_3").value === "readonly") {
		document.getElementById('relle3_3').style.display = 'none';
		document.getElementById('relle3_tot3').style.display = 'none';
		document.getElementById('sub3_rell3').style.display = 'none';
	}
	if(document.getElementById("caja4_3").value === "readonly") {
		document.getElementById('relle4_3').style.display = 'none';
		document.getElementById('relle4_tot3').style.display = 'none';
		document.getElementById('sub4_rell3').style.display = 'none';
	}
	if(document.getElementById("caja5_3").value === "readonly") {
		document.getElementById('relle5_3').style.display = 'none';
		document.getElementById('relle5_tot3').style.display = 'none';
		document.getElementById('sub5_rell3').style.display = 'none';
	}
	if(document.getElementById("caja6_3").value === "readonly") {
		document.getElementById('relle6_3').style.display = 'none';
		document.getElementById('relle6_tot3').style.display = 'none';
		document.getElementById('sub6_rell3').style.display = 'none';
	}
	if(document.getElementById("caja7_3").value === "readonly") {
		document.getElementById('relle7_3').style.display = 'none';
		document.getElementById('relle7_tot3').style.display = 'none';
		document.getElementById('sub7_rell3').style.display = 'none';
	}
});


/* valida si seleccionó una o mas promos*/
function val_eligio() {
	var caja1 = document.getElementById("caja1-seleccionada").value;
	if(caja1 === "") {
		Swal.fire({
		  icon: 'error',
		  position: 'top-end',
		  title: 'Debes seleccionar una promoción!',
		  footer: '<a href>Para disfrutar los sushis mas deliciosos del mundo</a>',
		  allowOutsideClick:false,
		  confirmButtonText: "Aceptar",
		  width: '400px'
	})
	return false;
}}


/* Va totalizando, segun cambios y/o adicionales  < val_eligio() >*/
function valor_totalizando(inicial,total) {
	Swal.fire({
	icon: 'warning',
	title: 'Inicial: $'+inicial+',..con cambios y adicionales: $'+total,
	footer: '<a href>Para disfrutar los sushis mas deliciosos del mundo</a>',
	allowOutsideClick:false,
	timer: 3000,
	/* confirmButtonText: "Seguir", */
	width: '700px'
	})
}

function seguir_comoadmin() {
	Swal.fire({
	  icon: 'error',
	  title: 'Debes seleccionar una promoción!',
	  footer: '<a href>Para disfrutar los sushis mas deliciosos del mundo</a>',
	  allowOutsideClick:false,
	  confirmButtonText: "Aceptar",
	  width: '700px'
	})
	return false;
}


function selecciona_vigente(xx,yy) {
	var src = "/static/img/mapa.jpg";
	if(document.getElementById(xx).checked  == 0) {
		Swal.fire({
		  position: 'top-end',
		  icon: 'error',
		  title: 'Debe estar seleccionada la definición para uso de dicha hora', 
		  showConfirmButton: true,
		  confirmButtonText: 'Aceptar',
		})
		document.getElementById(yy).checked = 0;
		return false;
	}
}	

function clic_img() {
	var item = document.getElementById("img");
	var hasClase2 = item.classList.contains( 'chica' );  /*entrega: true o false*/
	if(hasClase2==true){
		document.getElementById("img").className = "grande"; /* cambia el nombre de la clase, asi gatilla CSS */
	}else{
		document.getElementById("img").className = "chica";  /* cambia el nombre de la clase, asi gatilla CSS */
	}
}

function oculta_muestra() {
	var prom1 = document.getElementById("c1");
	var prom2 = document.getElementById("c2");
	var prom3 = document.getElementById("c3");
    /*
	var tieneclase = prom1.classList.contains( 'c1' );  /* entrega: true o false 
	if(tieneclase==true){
		document.getElementById("c1").className = "esconde"; /* cambia el nombre de la clase, pero el id sigue siendo c1 
	}else{
		document.getElementById("c1").className = "c1";  /* cambia el nombre de la clase, pero el id sigue siendo c1 
	}
	*/

	if(document.getElementById('c1').style.display == 'none') {
		$("#c1").show("slowly");
 		document.getElementById('c1').style.display = 'block';
 		document.getElementById('c2').style.display = 'block';
 		document.getElementById('c3').style.display = 'block';
 	} else {
  		document.getElementById('c1').style.display = 'none';
 		document.getElementById('c2').style.display = 'none';
 		document.getElementById('c3').style.display = 'none';
 	}

}


/* En el template: columna1 es ID = codigo, columna2 es ID = corr */
function inicializa_dia(xx,yy) {
	for (i in xx) {
		if(document.getElementById(xx[i]).checked) {
			document.getElementById(yy[i]).checked = true; 
		}
	}
}


/*
$(document).ready(function () {
	$("#c1").click(function() {
		$("#c1").show("slow");
	});

	$("#esconde").click(function() {
		$("#c1").hide("slow");
	});

});
*/

/* ES LLAMADA DESDE LA LINEA 921  */
function sweetalert_maximocambio(cmb,nprom) {
	var entrega_x = false;
  	var maxcamb_envolt = document.getElementById("var_valor1").value; /* trae el max cambio q debe hacerse x definicion*/	
	var max_env = ncambios_yahechos(nprom);  /* cambios ya hechos a la promo 'npromo' */
	/* Nota: cmb=0, implica que esa seleccion fue "--cambia por--" */
	if(cmb!=0){
   		if(max_env+1 > maxcamb_envolt) {
			Swal.fire({
	  		position: 'top-end',
	  		icon: 'error',
	  		title: 'Has completado el máximo de cambios, que es de '+maxcamb_envolt+' por promoción', 
	  		showConfirmButton: true,
	  		confirmButtonText: 'Aceptar',
			})
  			entrega_x = true;
   		}
   	}	
	return entrega_x;
}	

