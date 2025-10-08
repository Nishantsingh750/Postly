import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  // Button click handler
  const handleAction = () => {
    if (authStatus) {
      navigate("/add-post");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="w-full bg-gray-100 pt-14">
      <div className="min-h-screen px-4 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-purple-600">Postly</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Create. Edit. Share your thoughts with the world through beautifully crafted posts.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleAction}
              className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Write", "Edit", "Publish"].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer"
              onClick={handleAction}
            >
              <h3 className="text-xl font-semibold text-purple-700 mb-2">{item}</h3>
              <p className="text-gray-600">
                {item === "Write" && "Use our intuitive editor to write your thoughts."}
                {item === "Edit" && "Revise your posts easily with auto-saving drafts."}
                {item === "Publish" && "Share with the world in one click."}
              </p>
            </div>
          ))}
        </div>

        {/* Latest Posts Section */}
        {posts.length > 0 && (
          <div className="mt-20 py-10 bg-gradient-to-b from-purple-200 via-purple-100 to-white rounded-3xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Latest Posts
            </h2>
            <div className="flex flex-wrap justify-center">
              {posts.map((post) => (
                <div key={post.$id} className="p-2 w-full sm:w-1/2 lg:w-1/4">
                  <PostCard {...post} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
