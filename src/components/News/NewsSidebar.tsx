"use client";

import React, { useState } from "react";
import Link from "next/link";

const NewsSidebar: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/search?query=${query}`);
      if (!res.ok) {
        throw new Error("Failed to fetch search results");
      }
      const data = await res.json();
      setResults(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget_search">
          <h3 className="widget-title">Search Now</h3>

          <div className="post-wrap">
            <form className="search-form" onSubmit={handleSearch}>
              <label>
                <input
                  type="search"
                  className="search-field"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </label>

              <button type="submit">
                <i className="bx bx-search"></i>
              </button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="search-results">
              {results.map((result: any) => (
                <div key={result.id}>
                  <h3>{result.data.title}</h3>
                  <p>{result.data.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="widget widget-posts-thumb">
          <h3 className="widget-title">Popular Posts</h3>

          <div className="post-wrap">
            <article className="item">
              <Link href="/news/news-details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{
                    backgroundImage: `url(/images/blog-details/popular-posts-1.png)`,
                  }}
                ></span>
              </Link>

              <div className="info">
                <time>February 20, 2020</time>
                <h4 className="title usmall">
                  <Link href="/news/news-details">
                    Making Peace With The Feast Or Famine Of Freelancing
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>

            <article className="item">
              <Link href="/news/news-details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{
                    backgroundImage: `url(/images/blog-details/popular-posts-2.png)`,
                  }}
                ></span>
              </Link>

              <div className="info">
                <time>February 21, 2020</time>
                <h4 className="title usmall">
                  <Link href="/news/news-details">
                    I Used The Web For A Day On A 50 MB Budget
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>

            <article className="item">
              <Link href="/news/news-details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{
                    backgroundImage: `url(/images/blog-details/popular-posts-3.png)`,
                  }}
                ></span>
              </Link>

              <div className="info">
                <time>February 22, 2020</time>
                <h4 className="title usmall">
                  <Link href="/news/news-details">
                    How To Create A Responsive Popup Gallery?
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>

            <article className="item">
              <Link href="/news/news-details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{
                    backgroundImage: `url(/images/blog-details/popular-posts-4.png)`,
                  }}
                ></span>
              </Link>

              <div className="info">
                <time>February 23, 2020</time>
                <h4 className="title usmall">
                  <Link href="/news/news-details">
                    Web development the best work in the future for the world
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>
          </div>
        </div>

        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <div className="post-wrap">
            <ul>
              <li>
                <Link href="#">
                  Business <span>(10)</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  Privacy <span>(20)</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  Technology <span>(10)</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  Tips <span>(12)</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  Uncategorized <span>(16)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="post-wrap">
            <div className="tagcloud">
              <Link href="#">IT Solution (3)</Link>
              <Link href="#">Uncategorized (3)</Link>
              <Link href="#">Tips (2)</Link>
              <Link href="#">AI Solution (2)</Link>
              <Link href="#">Technology (1)</Link>
              <Link href="#">Privacy (1)</Link>
              <Link href="#">Business (1)</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsSidebar;
