export function Header()
{
    return (
              <>
    <header className="py-8 px-2 bg-[#4d4d4d] text-white text-center md:flex justify-between">
    <div>
      <h4 className="mb-2  font-bold text-xl">🏠ESCOLA DE INFORMÁTICA📘</h4>
    </div>
    <nav className="space-x-2">
      <a href="">Home</a>
      <a href="/pages/curso_html.html">Curso de HTML</a>
      <a href="">Curso CSS</a>
      <a href="">Curso JS</a>
      <a href="#">Contato</a>
    </nav>
  </header>
  <div className="md:grid grid-cols-2 items-center">
    <div>
      <img src="/img/banner.svg" alt="" />
    </div>
    <div className="text-center text-white">
      <h3>UTFTEC</h3>
      <h4>A MELHOR ESCOLA DE INFORMÁTICA</h4>
      <button className="px-4 py-2 mt-4 bg-white rounded-md text-black hover:bg-green-400">
        Informações
      </button>
    </div>
  </div>
  </>

    );

}