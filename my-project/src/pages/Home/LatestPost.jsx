import React from 'react';
import pic1 from '../../assets/images/green1 (1).jpg'
import pic2 from '../../assets/images/green2.jpg'
import pic3 from '../../assets/images/green3.jpg'

const LatestPosts = () => {
  const posts = [
    {
      title: "8 Reasons Why Microgreens Need Weight for Optimal Growth",
      img: pic1, 
      badge: "8 Reasons Explained!",
    },
    {
      title: "Microgreens vs Sprouts: A Comprehensive Comparison",
      img: pic2,
      badge: "Are They Different?",
    },
    {
      title: "What Are Microgreens?",
      img: pic3,
      badge: "Definitive Answer",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 p-10">
      <div className="container mx-auto text-center p-10">
        <h2 className="text-4xl text-gray-800 font-medium"><em>Explore My</em></h2>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">Latest <span className="text-green-600">Posts</span></h1>
        <p className=" text-gray-700 mt-4 ">
          Uncover the secrets of microgreen cultivation. Growing microgreens doesn’t have to be a challenge. I’m here to make it easy and enjoyable. 
          <a href="#" className="text-green-600 font-medium"> Check out my latest posts</a>, where you’ll find insights into cultivating amazing microgreens, managing a microgreen business, navigating regulations, and so much more!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
              <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="bg-red-600 text-white text-sm font-bold rounded px-3 py-1 inline-block mb-3">
                  {post.badge}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-8 bg-green-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">
          Click Here to Dive Into All Posts
        </button>
      </div>
    </section>
  );
};

export default LatestPosts;
