import CategoryBTN from "@/ui/categoty-btn";
import Image from "next/image";
function Home() {
  const images = ["/assets/1.jpg", "/assets/2.jpg", "/assets/3.jpg"];

  return (
    <main className="w-11/12 md:w-11/12 lg:w-10/12 mx-auto mt-10">
      <div className="hidden md:grid lg:grid-cols-3 md:grid-rows-2 gap-2 ">
        <div
          className="lg:col-span-2 min-h-40 md:min-h-72 lg:min-h-96 rounded-xl"
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
                            onClick={() => {}}
                            className="px-2 bg-light-primary50 border rounded-3xl font-light mr-2"
                          />

                          <CategoryBTN
                            title="Research"
                            onClick={() => {}}
                            className="px-2 bg-light-primary50 border rounded-3xl font-light mr-2"
                          />
                          <CategoryBTN
                            title="Present"
                            onClick={() => {}}
                            className="px-2 bg-light-primary50 border rounded-3xl font-light mr-2"
                          />
                          <CategoryBTN
                            title="Design"
                            onClick={() => {}}
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
          <div
            className="lg:col-span-2 rounded-xl"
            style={{
              backgroundImage: `url(${images[1]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
                  >
                      <div className="flex h-full article bg-black/35 p-2">
                          <div className="w-full h-3/4 self-end">
                              <div className="title lg:h-2/4 md:h-2/4 ">
                                  <h3 className="text-light-textwhite dark:text-dark-textcolor lg:text-sm text-wrap">
                                      Improve your design skills: Develope an eye catching design
                                  </h3>
                                  <p className="text-light text-light-textwhite dark:text-dark-textcolor lg:text-sm font-light">
                                      Tools and trend changes to ui master, Tools and trend changes
                                      to ui master,
                                  </p>
                              </div>
                              <div className="author lg:h-1/4 md:h-1/3  grid md:grid-cols-2 gap-2 ">
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
                                                     
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

          </div>
          <div
            className="lg:col-span-2 rounded-xl"
            style={{
              backgroundImage: `url(${images[2]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
                  >
                      <div className="flex h-full article bg-black/35 p-2">
                          <div className="w-full h-3/4 self-end">
                              <div className="title lg:h-2/4 md:h-2/4">
                                  <h3 className="text-light-textwhite dark:text-dark-textcolor lg:text-sm text-wrap">
                                      Improve your design skills: Develope an eye catching design
                                  </h3>
                                  <p className="text-light text-light-textwhite dark:text-dark-textcolor lg:text-sm font-light">
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

                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="md:hidden grid grid-rows-3 gap-2 ">
        <div
          className="p-4 min-h-40 md:min-h-56 lg:min-h-96 rounded-xl"
          style={{
            backgroundImage: `url(${images[0]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex h-full ">
            <div className="w-full h-2/4 self-end">
              <h3 className="text-light-textwhite dark:text-dark-textcolor text-xl">
                Improve your design skills: Develope an eye catching design
              </h3>
              <p className=" text-light text-light-textwhite dark:text-dark-textcolor text-sm">
                Improve your design skills: Develope an eye catching design
              </p>
            </div>
          </div>
        </div>
        <div
          className="p-4 min-h-40 md:min-h-56 lg:min-h-96 rounded-xl"
          style={{
            backgroundImage: `url(${images[1]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          Spans 2 columns
        </div>
        <div
          className="p-4 min-h-40 md:min-h-56 lg:min-h-96 rounded-xl"
          style={{
            backgroundImage: `url(${images[2]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          Spans 2 columns
        </div>
      </div>
    </main>
  );
}

export default Home;
