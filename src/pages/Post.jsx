import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="min-h-screen bg-gray-100 py-10 flex justify-center">
      <div className="w-full max-w-3xl flex flex-col rounded-3xl shadow-2xl overflow-hidden border border-purple-300 bg-gradient-to-b from-purple-100 via-purple-50 to-pink-50">
        {/* Full Image */}
        <div className="w-full">
          <img
            src={appwriteService.getFileView(post.featuredImage)}
            alt={post.Title}
            className="w-full object-contain"
          />
        </div>

        {/* Title and Content */}
        <div className="p-6 bg-transparent">
          <h1 className="text-3xl md:text-4xl font-bold text-Black-100 mb-4">
            {post.Title}
          </h1>
          <div className="text-gray-800 prose max-w-none">{parse(post.content)}</div>
        </div>

        {/* Author Actions */}
        {isAuthor && (
          <div className="flex justify-end p-4 space-x-2 bg-transparent">
            <Link to={`/edit-post/${post.$id}`}>
              <Button bgColor="bg-green-500" className="hover:bg-green-600">
                Edit
              </Button>
            </Link>
            <Button bgColor="bg-red-500" className="hover:bg-red-600" onClick={deletePost}>
              Delete
            </Button>
          </div>
        )}
      </div>
    </div>
  ) : null;
}
