const cliente = [
    {nome: "Francellin", idade: "35", CPF: "111.000.000-00"},
    {nome: "Castello", idade: "31", CPF: "222.000.000-00"},
    {nome: "Gustavo", idade: "18", CPF: "333.000.000-00"},
    {nome: "Salmazo", idade: "17", CPF: "444.000.000-00"},
    {nome: "Schimitd", idade: "17", CPF: "555.000.000-00"},
    {nome: "Anelize", idade: "16", CPF: "555.000.000-00"},
];


const Contact = () => {
    console.log(cliente);
  return (
    <>
    <h1>Contact</h1>
    {cliente.map((item) => (
        <div key={item.CPF}>
            Cliente - {item.nome} | Idade - {item.idade}
        </div>
    ))}
    </>
  )
}

export default Contact