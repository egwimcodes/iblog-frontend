import React from 'react'
import CategoryBTN from "@/ui/categoty-btn";
import Image from "next/image";

function Newest_Section() {
    const images = ["/assets/1.jpg", "/assets/2.jpg", "/assets/3.jpg"];
  return (
      <>
          <div className="hidden h-auto md:grid lg:grid-cols-3 md:auto-rows-min gap-2 b">
              <div
                  className="lg:col-span-2 h-auto rounded-xl"
                  style={{
                      backgroundImage: `url(${images[0]})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                  }}
              >
                  <div className="flex h-full article bg-black/35 p-4 rounded-lg">
                                        <div className="w-full h-2/4 self-end">
                                            <div className="title lg:h-2/3 md:h-2/4">
                                                <h3 className="text-light-textwhite dark:text-dark-textcolor lg:text-3xl text-wrap">
                                                    Improve your design skills: Develope an eye catching design
                                                </h3>
                                                <p className="text-light text-light-textwhite dark:text-dark-textcolor lg:text-lg font-light">
                                                    Tools and trend changes to ui master, Tools and trend changes
                                                    to ui master,
                                                </p>
                                            </div>
                                            <div className="author lg:h-1/4 md:h-2/4  grid md:grid-cols-2 gap-2">
                                                <div className="author-details ">
                                                    <div className="grid grid-cols-2">
                                                        <div className="wb">
                                                            <div className="written-by text-light-textwhite">
                                                                Written by:
                                                            </div>
                                                            <div className="avater flex flex-row items-center">
                                                                <Image
                                                                    src={
                                                                        "/assets/portrait-businesswoman-isolated-home.jpg"
                                                                    }
                                                                    width={40}
                                                                    height={40}
                                                                    alt="author"
                                                                    className="rounded-3xl"
                                                                />{" "}
                                                                <p className="text-light-textwhite mx-1">IntellaNex</p>
                                                            </div>
                                                        </div>
                  
                                                        <div className="wb">
                                                            <p className="published  text-light-textwhite">
                                                                Published:
                                                            </p>
                                                            <p className="text-light-textwhite my-2">1 Jan 2025</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="category ">
                                                    <div className="grid grid-cols-1">
                                                        <div className="wb">
                                                            <p className="published  text-light-textwhite">
                                                                Category
                                                            </p>
                                                            <div className="cat-btn ">
                                                                <p className="text-light-textwhite my-2 flex flex-row ">
                                                                    <CategoryBTN
                                                                        title="Design"
                                                                        onClick={() => { }}
                                                                        className="px-2 bg-light-primary50 border rounded-3xl font-light mr-2"
                                                                    />
                  
                                                                    <CategoryBTN
                                                                        title="Research"
                                                                        onClick={() => { }}
                                                                        className="px-2 bg-light-primary50 border rounded-3xl font-light mr-2"
                                                                    />
                                                                    <CategoryBTN
                                                                        title="Present"
                                                                        onClick={() => { }}
                                                                        className="px-2 bg-light-primary50 border rounded-3xl font-light mr-2"
                                                                    />
                                                                    <CategoryBTN
                                                                        title="Design"
                                                                        onClick={() => { }}
                                                                        className="px-2 bg-light-primary50 border rounded-3xl font-light mr-2"
                                                                    />
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-rows-2 gap-2">
                  {[1, 2].map((index) => (
                      <div
                          key={index}
                          className="lg:col-span-2 h-auto rounded-xl"
                          style={{
                              backgroundImage: `url(${images[index]})`,
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover",
                          }}
                      >
                          <div className="flex h-full article bg-black/35 p-2">
                              <div className="w-full self-end">
                                  <div className="title">
                                      <h3 className="text-light-textwhite dark:text-dark-textcolor lg:text-sm text-wrap">
                                          Improve your design skills: Develop an eye-catching design
                                      </h3>
                                      <p className="text-light text-light-textwhite dark:text-dark-textcolor lg:text-sm font-light">
                                          Tools and trend changes to UI master, Tools and trend changes to UI master.
                                      </p>
                                  </div>
                                  <div className="category mt-2">
                                      <p className="text-light-textwhite">Category:</p>
                                      <div className="flex gap-2 mt-2">
                                          <CategoryBTN title="Design" className="px-2 bg-light-primary50 border rounded-3xl font-light" />
                                          <CategoryBTN title="Research" className="px-2 bg-light-primary50 border rounded-3xl font-light" />
                                      </div>
                                  </div>
                                  <div className="author grid md:grid-cols-2 gap-2 mt-2">
                                      <div className="author-details flex items-center">
                                          <Image
                                              src={"/assets/portrait-businesswoman-isolated-home.jpg"}
                                              width={40}
                                              height={40}
                                              alt="author"
                                              className="rounded-full"
                                          />
                                          <p className="text-light-textwhite mx-2">IntellaNex</p>
                                      </div>
                                      <div className="text-light-textwhite">Published: 1 Jan 2025</div>
                                  </div>
                                  
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>


          {/* Mobile version */}
          <div className="md:hidden grid grid-rows-3 gap-3 ">
              <div
                  className="lg:col-span-2 rounded-xl  h-52 "
                  style={{
                      backgroundImage: `url(${images[0]})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                  }}
              >
                  <div className="flex h-full article bg-black/35 p-2">
                      <div className="w-full h-3/4 self-end">
                          <div className="title h-3/4">
                              <h3 className="text-light-textwhite dark:text-dark-textcolor text-base text-wrap">
                                  Improve your design skills: Develope an eye catching design
                              </h3>
                              <p className="text-light text-light-textwhite dark:text-dark-textcolor text-sm font-light">
                                  Tools and trend changes to ui master, Tools and trend changes
                                  to ui master,

                              </p>
                          </div>
                          <div className="author h-1/4  grid md:grid-cols-2 gap-2 ">
                              <div className="author-details ">
                                  <div className="grid grid-cols-2">
                                      <div className="wb">
                                          <p className="text-xs text-light-textwhite font-light">
                                              Written by:
                                          </p>

                                          <div className="avater flex flex-row items-center">

                                              <p className="text-light-textwhite my-1 text-xs">IntellaNex</p>
                                          </div>
                                      </div>

                                      <div className="wb">
                                          <p className="published  text-light-textwhite text-xs font-light">
                                              Published:
                                          </p>
                                          <p className="text-light-textwhite my-1 text-xs">1 Jan 2025</p>
                                      </div>
                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>
              </div>
              <div
                  className="lg:col-span-2 rounded-xl  h-52 "
                  style={{
                      backgroundImage: `url(${images[1]})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                  }}
              >
                  <div className="flex h-full article bg-black/35 p-2">
                      <div className="w-full h-3/4 self-end">
                          <div className="title h-3/4">
                              <h3 className="text-light-textwhite dark:text-dark-textcolor text-base text-wrap">
                                  Improve your design skills: Develope an eye catching design
                              </h3>
                              <p className="text-light text-light-textwhite dark:text-dark-textcolor text-sm font-light">
                                  Tools and trend changes to ui master, Tools and trend changes
                                  to ui master,

                              </p>
                          </div>
                          <div className="author h-1/4  grid md:grid-cols-2 gap-2 ">
                              <div className="author-details ">
                                  <div className="grid grid-cols-2">
                                      <div className="wb">
                                          <p className="text-xs text-light-textwhite font-light">
                                              Written by:
                                          </p>

                                          <div className="avater flex flex-row items-center">

                                              <p className="text-light-textwhite my-1 text-xs">IntellaNex</p>
                                          </div>
                                      </div>

                                      <div className="wb">
                                          <p className="published  text-light-textwhite text-xs font-light">
                                              Published:
                                          </p>
                                          <p className="text-light-textwhite my-1 text-xs">1 Jan 2025</p>
                                      </div>
                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>
              </div>
              <div
                  className="lg:col-span-2 rounded-xl  h-52 "
                  style={{
                      backgroundImage: `url(${images[2]})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                  }}
              >
                  <div className="flex h-full article bg-black/35 p-2">
                      <div className="w-full h-3/4 self-end">
                          <div className="title h-3/4">
                              <h3 className="text-light-textwhite dark:text-dark-textcolor text-base text-wrap">
                                  Improve your design skills: Develope an eye catching design
                              </h3>
                              <p className="text-light text-light-textwhite dark:text-dark-textcolor text-sm font-light">
                                  Tools and trend changes to ui master, Tools and trend changes
                                  to ui master,

                              </p>
                          </div>
                          <div className="author h-1/4  grid md:grid-cols-2 gap-2 ">
                              <div className="author-details ">
                                  <div className="grid grid-cols-2">
                                      <div className="wb">
                                          <p className="text-xs text-light-textwhite font-light">
                                              Written by:
                                          </p>

                                          <div className="avater flex flex-row items-center">

                                              <p className="text-light-textwhite my-1 text-xs">IntellaNex</p>
                                          </div>
                                      </div>

                                      <div className="wb">
                                          <p className="published  text-light-textwhite text-xs font-light">
                                              Published:
                                          </p>
                                          <p className="text-light-textwhite my-1 text-xs">1 Jan 2025</p>
                                      </div>
                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </>
  )
}

export default Newest_Section