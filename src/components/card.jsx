import * as React from "react";
import content from "../assets/images/content.jpg";

export default function MediaCard({posts}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="">
        <div className="card-image">
          <img className="content__image" src={content} alt="" />
        </div>
        <div className="card-content">
          <div className="card__title">Music is Life</div>
          <h2 className="card__subtitle">
            Lorem ipsum dolor consectetur adipisicing elit.
          </h2>
          <hr className="w-25 mb-1 mt-2 mx-auto" />
          <span className="card__time">1 hour ago</span>
          <hr className="w-25 mt-1 mb-2 mx-auto" />
          <p className="card__disc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            voluptatibus eius deserunt repudiandae possimus quae facilis est
            dolores quaerat itaque quidem placeat quod nisi velit, iusto
            laudantium beatae a culpa. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Nobis eligendi officiis facere aut beatae ut
            voluptatum similique, illo impedit corrupti placeat ullam laborum
            animi, molestias culpa soluta optio quaerat provident.
          </p>
        </div>
      </div>

      <div className="">
        <div className="card-image">
          <img className="content__image" src={content} alt="" />
        </div>
        <div className="card-content">
          <div className="card__title">Music is Life</div>
          <h2 className="card__subtitle">
            Lorem ipsum dolor consectetur adipisicing elit.
          </h2>
          <hr className="w-25 mb-1 mt-2 mx-auto" />
          <span className="card__time">1 hour ago</span>
          <hr className="w-25 mt-1 mb-2 mx-auto" />
          <p className="card__disc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            voluptatibus eius deserunt repudiandae possimus quae facilis est
            dolores quaerat itaque quidem placeat quod nisi velit, iusto
            laudantium beatae a culpa. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Nobis eligendi officiis facere aut beatae ut
            voluptatum similique, illo impedit corrupti placeat ullam laborum
            animi, molestias culpa soluta optio quaerat provident.
          </p>
        </div>
      </div>
    </div>
  );
}

// 25, 86, 6, 88, 102
  