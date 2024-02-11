import React from "react"
import { Link, useLocation } from "react-router-dom"
import Logo from "../../assets/images/Secondcellar_alternative_1_round.png"
import vine from "../../assets/images/vine.jpg"

export default function TheVine() {
  const location = useLocation()
  const lastSegment = location.pathname.split("/").pop()
  const title = lastSegment
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div>
      <div className="flex justify-center min-h-screen font-poppins">
        <div className="max-w-[1920px] w-full bg-gradient-to-b from-thema5/70 via-thema2 to-thema1">
          <Link to="/wineworld" className="flex items-center justify-center gap-1 mt-2 mb-6 ml-2 sm:mt-6 sm:gap-3 sm:ml-3">
            <img src={Logo} alt="logo" className="w-8 sm:w-12" />
            <p className="sm:text-[1.8rem] text-[1.3rem] font-bold text-thema4">Return to Wine World</p>
          </Link>
          <div className="flex justify-center">
            <p className="text-white text-[2.5rem] sm:text-[4rem] font-bold">{title}</p>
          </div>
          <div className="flex justify-center mt-6">
            <div className="w-[90%] bg-white h-full rounded-2xl mb-20 pb-5">
              <p className="text-[1.5rem] sm:text-[2rem] font-bold ml-10 mt-10">Chapter 1</p>
              <p className="mt-5 ml-10 mr-10 text-[1rem] sm:text-[1.2rem]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident iure fugit suscipit. Nulla, dicta accusamus omnis eum deserunt
                quidem quod officia labore cupiditate, voluptas quaerat minima quibusdam incidunt nisi ab. Autem deleniti consequuntur eos corrupti
                totam iusto quibusdam fugit at ad! Animi saepe sit similique. Et, aliquam magni esse beatae alias cumque assumenda cum expedita
                dolorum, tempore, nemo dolor inventore. Reprehenderit ducimus nam provident quidem laboriosam, dignissimos nisi numquam impedit animi
                culpa incidunt, beatae tenetur libero enim? Excepturi, cumque veritatis! Aspernatur officia dolorem quidem inventore mollitia neque
                doloremque odit. Ab. Esse porro numquam modi quis facere tenetur molestias cupiditate dignissimos consequuntur ex voluptatum sint qui,
                alias rem voluptatibus repellat quibusdam animi eveniet fuga illum dicta, asperiores doloremque perspiciatis? A, ut. Harum ab
                necessitatibus illo nihil iure! Laudantium obcaecati doloremque expedita fugiat placeat, ipsum earum tenetur ab, consectetur rem
                similique nihil quas eveniet id commodi dolor saepe nostrum sunt. Earum, totam. Saepe excepturi totam architecto magni quos libero
                adipisci perferendis similique? Laudantium in voluptatum ex nam fugit omnis sed repellendus, aliquam itaque nostrum vel necessitatibus
                laboriosam minus, minima consequuntur cumque accusamus. Ab voluptatibus doloremque tempore! Ex consequuntur vero ipsa ipsam officia
                quos eligendi laboriosam nesciunt sed aut dignissimos odit inventore dolorem optio hic officiis mollitia velit, totam doloribus.
                <div className="flex justify-center mt-10 mb-10">
                  <img src={vine} alt="vine" className="w-[32rem] rounded-2xl shadow-xl" />
                </div>
                Ut, similique voluptas. A optio cupiditate sapiente corrupti asperiores odio minima inventore fugit doloribus exercitationem voluptate
                pariatur iusto velit porro reprehenderit deleniti atque, maiores qui dolore totam nulla molestiae cumque repellendus magni. Explicabo?
                Ullam corrupti voluptatibus quisquam architecto amet enim non ratione deleniti, soluta consequuntur commodi tempore eum minima nihil
                optio labore, nemo ipsa laudantium. In nostrum ipsam libero similique expedita tempore eius? Eaque dolore nulla saepe eius aliquid
                eum, quidem atque culpa harum dolores, animi voluptatem. Quibusdam tempore eligendi numquam delectus et nemo, ut facere laudantium ad
                vitae, ipsum natus consequuntur fuga! Qui accusamus, amet corporis unde commodi temporibus asperiores omnis inventore vitae illum
                ducimus. Temporibus sunt quaerat, dicta at provident, qui, illum nihil tempora deleniti vero fuga dolorum incidunt quae? Iste!
                Consectetur ea adipisci rem eum nesciunt vero facere reiciendis eligendi explicabo voluptatum, maiores repellendus vitae, assumenda
                iusto, a voluptas optio consequuntur numquam natus quia provident! Autem repellendus odit fuga a. Ab hic inventore, perspiciatis
                perferendis quibusdam necessitatibus eos est maxime neque aliquid repellat voluptates veritatis cumque, facere unde laborum sunt
                doloribus nulla temporibus sapiente porro beatae. Perspiciatis deleniti tenetur molestiae! Voluptatum voluptatibus optio veritatis sed
                consequuntur magni esse itaque, voluptatem incidunt id deleniti consectetur, aspernatur, quas accusantium? In quisquam, quos, nesciunt
                quia suscipit fugiat velit commodi quae iste saepe molestiae. Magni, nostrum? Quo quod, perferendis optio pariatur enim in nihil
                voluptatum ipsa cupiditate voluptates aliquid beatae reprehenderit iusto distinctio vitae quasi, ad accusantium. Optio dolor iusto,
                delectus illum deleniti eum! Id, voluptas exercitationem. Recusandae numquam, ea id ab velit adipisci nihil blanditiis debitis
                repudiandae sint ad suscipit iure sequi ut ex, aspernatur dolores harum porro quaerat, veritatis iusto reprehenderit? Impedit?
                Perspiciatis, eaque ad. Asperiores, rerum facere, sint, et vero maiores animi nam dolorem consectetur eveniet incidunt suscipit
                recusandae natus magnam! Quod et alias ipsa, reiciendis velit soluta corporis omnis ex? Ad, id at repellendus ipsam, vitae quas
                officiis, iusto illum labore dolor veritatis quidem! Minus odit voluptatem eos asperiores nesciunt saepe, quasi id nihil sint delectus
                voluptate totam molestias nostrum! Consequatur qui magni tempore suscipit non voluptates ut et adipisci vero, delectus corrupti quasi
                nesciunt dolorem? At quaerat molestias dolorum alias quidem, deserunt incidunt nulla ullam quia ab laboriosam maxime. Optio reiciendis
                cum quasi voluptates explicabo, quisquam tenetur eum ipsam voluptas itaque quam sed provident ex ducimus maiores architecto minima.
                Nam sunt, doloremque iure enim quos earum aperiam! Nulla, rerum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
