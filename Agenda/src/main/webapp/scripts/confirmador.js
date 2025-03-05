/**
 * confirmação de exlusão de contato
* @author vinicius reis zimmermann
*@param idcon 
 */

function confirmar(idcon) {
	let resposta = confirm("confirma a exclusão deste contato ?")
	if (resposta === true) {
		window.location.href = "delete?idcon=" + idcon
	}
}
