import { useEffect, useRef, useState } from 'react'
import { Engine, Render, Bodies, World } from 'matter-js'
// import jugWithoutShade from '../assets/img/jug-without-shade.png'
// import jug2 from '../assets/img/Blender.png'
// import cutter from '../assets/img/Cutter.png'
import '../assets/css/customBlender.css'
import useColorBlender from '../hooks/useColorBlender'
import useMediaQuery from '../hooks/useMediaQuery'

function TempBlender({ selectedData }) {
  const { width } = useMediaQuery()
  const { color, lottieColor, darkenColor, setColorArray } = useColorBlender()
  const [size, setSize] = useState({ width: 180, height: 200 })
  let jugWave = {
    // height: "10%",
    // marginTop: "20%",
    animation: 'moveToTop 5s linear forwards',

    // backgroundColor: "transparent",
  }
  let jugLiquid = {
    position: 'absolute',
    backgroundColor: color,
    // top: "20%",
    bottom: '0',
    animation: 'increaseHeight 5s linear forwards',
  }

  let wave = {
    background: `url(
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='${color}'/%3E%3C/svg%3E"
    )`,
    position: 'absolute',
    width: '200%',
    height: '100%',
    animation: 'wave 1s -3s linear infinite',
    transform: 'translate3d(0, 0, 0)',
    opacity: '0.8',
    display: 'none',
  }
  let wave2 = {
    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 140'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='${color}'/%3E%3C/svg%3E")`,
    position: 'absolute',
    width: '200%',
    height: '100%',
    animation: 'wave 3s -3s linear infinite',
    transform: 'translate3d(0, 0, 0)',
    opacity: 1,
  }
  let circle = {
    boxShadow: `1px 25px 0px 0px ${darkenColor} inset, 0px 10px 25px 50px ${darkenColor} inset`,

    // background: rgba(255, 31, 31, 0.215);
  }

  let imagesLink = {
    ananas: 'https://i.ibb.co/x5Yh3Cv/3.png',
    apfel: 'https://i.ibb.co/sbdYHM9/R-removebg-preview.png',
    avocado: 'https://i.ibb.co/QJhRR3n/2.png',
    banane: 'https://i.ibb.co/Gx85DBs/4.png',
    birne: 'https://i.ibb.co/87g7sW9/5.png',
    brombeere: 'https://i.ibb.co/hshf0wD/blackberry.png',
    erdbeere: 'https://i.ibb.co/L984VJG/Strawberry.png',
    feige: 'https://i.ibb.co/dD4TNDt/fig.png',
    granatapfel: 'https://i.ibb.co/y82N16F/pomegranate.png',
    heidelbeere: 'https://i.ibb.co/G23jS1c/Blueberry.png',
    himbeere: 'https://i.ibb.co/gDpYrNh/raspberry.png',
    honigmelone: 'https://i.ibb.co/KbWh3S3/Honeydew.png',
    kiwi: 'https://i.ibb.co/NnwZVtF/KiWI.png',
    litchi: 'https://i.ibb.co/1TKVHST/litchi1.png',
    mango: 'https://i.ibb.co/FY4wx26/mango.png',
    papaya: 'https://i.ibb.co/yfsK2Wq/papaya.png',
    pfirsich: 'https://i.ibb.co/cDjpSfs/peach.png',
    wassermelone: 'https://i.ibb.co/9nCSV0c/Watermelon.png',
    brokkoli: 'https://i.ibb.co/gTS08pg/broccoli.png',
    salatgurke: 'https://i.ibb.co/q5Wb4zv/Cucumber.png',
    karotte: 'https://i.ibb.co/grtwTBh/carrot.png',
    kürbis: 'https://i.ibb.co/zrmhT0J/pumpkin.png',
    paprika: 'https://i.ibb.co/vxBnXRS/paprika.png',
    tomate: 'https://i.ibb.co/s9vsS6G/tomato.png',
    rhabarber: 'https://i.ibb.co/74PsjKS/rhubarb.png',
    'rote bete': 'https://i.ibb.co/gVrwtDQ/Beetroot.png',
    sellerie: 'https://i.ibb.co/ZV67Gcp/celery.png',
    feldsalat: 'https://i.ibb.co/8xN9VDM/feldsalat1.png',
    grünkohl: 'https://i.ibb.co/hDHzM13/Kale.png',
    grunkohl: 'https://i.ibb.co/S3FDLv2/Gr-nkohl.png',

    babyspinat: 'https://i.ibb.co/S692qyq/Baby-spinach.png',
    grapefruit: 'https://i.ibb.co/Z8wXx3S/Grapefruit.png',
    limette: 'https://i.ibb.co/Rv1t9zd/lime.png',
    zitrone: 'https://i.ibb.co/TrzXnXY/lemon.png',
    ingwer: 'https://i.ibb.co/09P2P09/Ginger.png',
    kurkuma: 'https://i.ibb.co/THRGrzQ/turmeric.png',
    basilikum: 'https://i.ibb.co/Q9k0Bwz/basil.png',
    minze: 'https://i.ibb.co/Ybxzvjr/mint.png',
    zitronenmelisse: 'https://i.ibb.co/34th68b/Lemon-balm.png',
    ahornsirup: 'https://i.ibb.co/KrqPMny/maple-syrup.png',
    brennnessel: 'https://i.ibb.co/TqKncWj/Nettle.png',
    hagebutte: 'https://i.ibb.co/ts4dKvn/rose-hip.png',
    hanföl: 'https://i.ibb.co/gSSZyZ4/Hemp-oil.png',
    blütenhonig: 'https://i.ibb.co/k2df4R3/Flower-honey.png',
    mandelmus: 'https://i.ibb.co/dry4HsD/Mandelmus.png',
    maracuja: 'https://i.ibb.co/W6KXzzx/Passion-fruit.png',
    preiselbeere: 'https://i.ibb.co/cFdM4P2/cranberry.png',
    sanddornbeere: 'https://i.ibb.co/rM2fQmt/Sea-buckthorn-berry.png',
    weizengrassaft: 'https://i.ibb.co/vh4jJ6b/Wheatgrass-juice.png',

    gemusebruhe: 'https://i.ibb.co/HxQLZNN/Gemusebruhe-1.png',
    hafermilch: 'https://i.ibb.co/B2PNDXJ/Hafermilch-1.png',
    kokoswasser: 'https://i.ibb.co/wJZsrsQ/Kokoswasser-1.png',
    kombucha: 'https://i.ibb.co/gWXSPSN/Kombucha-1.png',
    'matcha-gruntee': 'https://i.ibb.co/wcfy0n0/Matcha-Gruntee-1.png',
    orangensaft: 'https://i.ibb.co/ctdVL3f/Orangensaft-1.png',
    quellwasser: 'https://i.ibb.co/gw5Fbsd/Quellwasser-1.png',
  }
  const scene = useRef()
  const engine = useRef(Engine.create())
  useEffect(() => {
    setColorArray([])
    if (selectedData) {
      setTimeout(() => {
        setColorArray(selectedData)
      }, 2000)
    }

    var parentDiv = document.querySelector('.fruit-layer')
    const handleResize = () => {
      parentDiv = document.querySelector('.fruit-layer')
    }
    window.addEventListener('resize', handleResize)

    // Cleanup the event listener on component unmount
    // const ch = document.body.clientHeight;
    setSize({ width: parentDiv?.clientWidth, height: parentDiv?.clientHeight })
    const ch = parentDiv?.clientHeight - 16 // 280;
    // const world = Engine.world;
    //  console.log("World -> ", Engine);
    // Adjusting gravity
    // World.gravity.y = 2; // Default is 1. You can increase or decrease this value.

    engine.current.world.gravity.y = 0.1
    const render =
      parentDiv &&
      Render.create({
        element: scene.current,
        engine: engine.current,
        options: {
          width: parentDiv?.clientWidth,
          height: parentDiv?.clientHeight,
          // width: 767 < width && width < 991 ? 130 : 180,
          // height: 767 < width && width < 991 ? 215 : ch,
          wireframes: false,
          background: 'transparent',
        },
      })
    // render.canvas.className = "fruit-layer";

    // Adjusted the boundaries to have an open top
    World.add(engine.current.world, [
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(400 / 2, ch + 10, 400, 20, { isStatic: true }),
      Bodies.rectangle(400 + 10, ch / 2, 20, ch, { isStatic: true }),
    ])

    Engine.run(engine.current)
    Render.run(render)

    return () => {
      Render.stop(render)
      World.clear(engine.current.world)
      Engine.clear(engine.current)
      render.canvas.remove()
      render.canvas = null
      render.context = null
      render.textures = {}
      window.removeEventListener('resize', handleResize)
    }
  }, [selectedData])

  const handleAddCircle = async (name) => {
    // Preload the image to get its natural dimensions
    const img = new Image()
    img.src = imagesLink[name]
    img.width = size?.width * 18
    img.height = size?.width * 18
    // img.src = "https://i.ibb.co/nb9D88C/strawberry.png";
    await new Promise((resolve) => {
      img.onload = resolve
    })

    const naturalWidth = img.width
    const naturalHeight = img.height

    // Calculate the scale factors
    const xScale = size?.width * 0.00125
    const yScale = size?.width * 0.00125

    const desiredWidth = 100 // in pixels
    const desiredHeight = 100 // in pixels
    // console.log("Image Here ", name);
    const minX = 90
    const maxX = 110 // Ensure the ball stays within bounds
    const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX
    const ball = Bodies.circle(randomX, 2, size?.width / 19, {
      mass: 10,
      restitution: 0.76,
      friction: 0.0005,
      render: {
        // fillStyle: color,

        sprite: {
          texture: imagesLink[name],
          // width: "10px",
          // height: "10px",
          xScale: xScale,
          yScale: yScale,
        },
      },
    })
    World.add(engine.current.world, [ball])
  }

  useEffect(() => {
    let timers = []

    const addCircles = async () => {
      for (let d of selectedData) {
        for (let i = 0; i < parseInt(d?.value_in_percentage); i++) {
          const timer = setTimeout(() => {
            handleAddCircle(d?.name?.toLowerCase())
          }, i * 50)
          timers.push(timer)
        }
      }
    }

    if (selectedData) {
      addCircles()
    }

    return () => {
      // Clear all timers when component unmounts
      timers.forEach((timer) => clearTimeout(timer))
    }
  }, [selectedData])

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div
          className="clip-container mx-auto fruit-layer"
          style={{
            // width: "250px",
            // height: "100%",
            overflow: 'hidden',
            clipPath: 'polygon(0 0, 100% 0, 97% 84%, 92% 100%, 9% 100%, 4% 90%)',
            // borderRadius: "90px",
          }}
        >
          <div className="pt-3" ref={scene} style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Liquid Layer */}
        <div
          className="position-absolute  start-0 end-0 mx-auto juice-layer"
          style={{
            overflow: 'hidden',
            clipPath: 'polygon(0 0, 100% 0, 97% 84%, 92% 100%, 8% 100%, 4% 90%)',
            // animation: "increaseHeight 5s linear forwards",
            top: '18%',
            // borderRadius: "90px",
          }}
        >
          <div className="position-relative" style={{ height: '100%', top: '20%' }}>
            {color && (
              <div className="w-100" style={jugLiquid}>
                {color && (
                  <div style={jugWave}>
                    <div className="ocean mainDiv">
                      <div style={wave} className="wave"></div>
                      <div style={wave2} className="wave2"></div>
                    </div>
                  </div>
                )}
                <div id="circle-container" className="mx-auto">
                  <div
                    style={{ height: '90%', width: '90%', ...circle }}
                    className="circle mx-auto !h-[90%] !w-[90%]"
                  ></div>
                  <div
                    style={{ height: '85%', width: '85%', ...circle }}
                    className="circle mx-auto !h-[80%] !w-[80%]"
                  ></div>
                  <div
                    style={{ height: '80%', width: '80%', ...circle }}
                    className="circle mx-auto !h-[70%] !w-[70%]"
                  ></div>
                  <div
                    style={{ height: '70%', width: '70%', ...circle }}
                    className="circle mx-auto !h-[60%] !w-[60%]"
                  ></div>
                  <div
                    style={{
                      height: '60%',
                      width: '60%',
                      marginTop: '-80px',
                      ...circle,
                    }}
                    className="circle mx-auto !h-[50%] !w-[50%]"
                  ></div>
                  <div
                    style={{
                      height: '55%',
                      width: '55%',
                      marginTop: '-50px',
                      ...circle,
                    }}
                    className="circle !top-[500px] mx-auto !h-[40%] !w-[40%]"
                  ></div>
                  <div
                    style={{
                      height: '50%',
                      width: '50%',
                      marginTop: '-50px',
                      ...circle,
                    }}
                    className="circle mx-auto !h-[30%] !w-[30%]"
                  ></div>
                  <div
                    style={{
                      height: '45%',
                      width: '45%',
                      marginTop: '-50px',
                      ...circle,
                    }}
                    className="circle mx-auto !h-[20%] !w-[20%]"
                  ></div>
                  <div
                    style={{
                      height: '40%',
                      width: '40%',
                      marginTop: '-50px',
                      ...circle,
                    }}
                    className="circle mx-auto !h-[20%] !w-[20%]"
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Liquid Layer End */}
        <div className="position-absolute top-0 start-0 left-0 w-100" style={{ zIndex: 9999999 }}>
          <img
            className="img-fluid mx-auto mixer-img "
            // width="300"
            src={'/assets/img/Blender.png'}
            style={{ zIndex: 999999 }}
          />
        </div>
      </div>
    </div>
  )
}

export default TempBlender
