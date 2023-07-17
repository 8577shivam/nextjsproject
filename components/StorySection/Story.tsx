import React from "react";

const Story = () => {
  return (
  
      <div className="story">
        <div className="left">
          <div className="innerleft">
            <div className="box1">
              <img
                src="/images/bottle.png"
                alt="box1"
              />
            </div>
            <div className="box2"></div>
          </div>
        </div>
        <div className="right">
          <p className="righttext relative">Our Story <img  className="absolute ml-auto mr-auto left-[147px] top-20" src="images/titledesign.png" alt="Titledesign" /> </p>
          <p className="rightinfo">
            Lorem ipsum dolor sit amet consectetur. Sed sit aenean condimentum
            nulla. Cursus tortor odio fringilla nibh nibh dictumst mattis. Enim
            semper sapien proin at nec pellentesque euismod tristique venenatis.
            Feugiat nulla orci elit sed magnis etiam semper placerat. Nunc a id
            integer eu. Quis velit praesent ante erat. Justo scelerisque lorem
            risus sed non erat egestas. Maecenas sit feugiat ornare enim risus.
            Pharetra vitae turpis id tortor. Viverra hac neque.
          </p>
        </div>
      </div>
    
  );
};

export default Story;
