<AnimatePresence initial={false}>
                    <motion.div
                      variants={{
                        hidden: {
                          opacity: 0,
                        },
                        visible: {
                          x: closeToggle ? [20] : -20,
                          transition: {
                            y: {
                              duration: 2,
                              ease: "easeOut",
                            },
                          },
                        },
                        removed: {
                          opacity: 0,
                        },
                      }}
                      initial="hidden"
                      animate="visible"
                      exit="removed"
                      className="flex flex-col min-w-210 z-50 overflow-y-auto top-0"
                    >
                      {/* sidebar bg image  */}
                      <img
                        src="	https://candlefish-assets.s3.amazonaws.com/assets/side-nav-background.png"
                        className="w-80 h-screen"
                      />
                      <div className="absolute flex flex-col mt-8 mr-3">
                        {/* close button  */}
                        <button
                          type="button"
                          onClick={handleCloseSidebar}
                          className="hover:bg-slate-600 hover:rounded-full ml-8"
                        >
                          <GrClose
                            style={{ color: "white" }}
                            className="text-xl"
                          />
                        </button>
                        {/* side bar */}
                        <div className="flex flex-col justify-center ml-8 mt-8 gap-5 text-white">
                          <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-extrabold">Shop</h1>
                            <div className="flex flex-col ml-5 text-xl font-semibold">
                              <a href="">By Collections</a>
                              <a href="">Seasonal Picks</a>
                              <a href="">Top Sellers</a>
                              <a href="">Gift Cards</a>
                            </div>
                          </div>
                          <div className="text-2xl font-extrabold">
                            <a href="">Discover</a>
                          </div>
                          <div className="text-2xl font-extrabold">
                            <a href="">The Library</a>
                          </div>
                          <div className="text-2xl font-extrabold">
                            <a href="">The Blog</a>
                          </div>
                          <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-extrabold">About</h1>
                            <div className="flex flex-col ml-5 text-xl font-semibold">
                              <a href="">Our Story</a>
                              <a href="">Contach Us</a>
                              <a href="">Location and Hours</a>
                              <a href="">Shop Wholesale</a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-3">
                            <h1 className="text-2xl font-extrabold">
                              Custom Candles
                            </h1>
                            <div className="flex flex-col ml-5 text-2xl font-semibold">
                              <a href="">Private Lable Services</a>
                              <a href="">Wedding Candles</a>
                            </div>
                          </div>
                          <div>
                            <div className="text-2xl font-extrabold">
                              <a href="">Candle Making Classes</a>
                            </div>
                          </div>
                        </div>
                        {/* login button  */}
                        <div className="flex justify-center">
                          <Link href="/login">
                            <a>
                              <button className="font-extrabold bg-black text-white text-xs tracking-widest flex justify-center items-center mb-5 w-56 h-8 ">
                                LOGIN
                              </button>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>