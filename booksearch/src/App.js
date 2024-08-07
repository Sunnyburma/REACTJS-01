import React, { Component } from "react";
import {
  ReactiveBase,
  SearchBox,
  SingleRange,
  ResultCard,
  ReactiveList
} from "@appbaseio/reactivesearch";
import "./App.css";

class App extends Component {
  render() {
    return (
      <ReactiveBase
        app="good-books-ds"
        url="https://6a0ae3a3a8d4:6a3f508d-169b-4ed7-9680-20658120930f@appbase-demo-ansible-abxiydt-arc.searchbase.io"
        enableAppbase
      >
        <div className="navbar">
          <div className="logo">The Booksearch App</div>
          <SearchBox
            componentId="mainSearch"
            dataField={[
              "original_title",
              "original_title.search",
              "authors",
              "authors.search"
            ]}
            categoryField="genres.keyword"
            queryFormat="and"
            placeholder="Search for books..."
            iconPosition="left"
            autosuggest={true}
            filterLabel="search"
            enableRecentSuggestions={true}
            enablePopularSuggestions={true}
            enablePredictiveSuggestions={true}
            popularSuggestionsConfig={{
              size: 3,
              minHits: 2,
              minChars: 4
            }}
            recentSuggestionsConfig={{
              size: 3,
              minChars: 4
            }}
            index="good-books-ds"
            size={10}
            className="searchbar"
            innerClass={{
              input: "searchbox",
              list: "suggestionlist"
            }}
            showClear
          />
        </div>
        <div className={"display"}>
          <div className={"leftSidebar"}>
            <SingleRange
              componentId="ratingsFilter"
              dataField="average_rating_rounded"
              title="Book Ratings"
              data={[
                { start: 4, end: 5, label: "⭐⭐⭐⭐ & up" },
                { start: 3, end: 5, label: "⭐⭐⭐ & up" },
                { start: 2, end: 5, label: "⭐⭐ & up" },
                { start: 1, end: 5, label: "⭐ & up" }
              ]}
            />
          </div>
          <div className={"mainBar"}>
            <ReactiveList
              componentId="results"
              dataField="original_title"
              react={{
                and: ["mainSearch", "ratingsFilter"]
              }}
              pagination={true}
              size={8}
              render={({ data }) => (
                <ReactiveList.ResultCardsWrapper>
                  {data.map((item) => (
                    <ResultCard key={item.id}>
                      <ResultCard.Image src={item.image} />
                      <ResultCard.Title>
                        <div
                          className="book-title"
                          dangerouslySetInnerHTML={{
                            __html: item.original_title
                          }}
                        />
                      </ResultCard.Title>

                      <ResultCard.Description>
                        <div className="flex column justify-space-between">
                          <div>
                            <div>
                              by{" "}
                              <span className="authors-list">
                                {item.authors}
                              </span>
                            </div>
                            <div className="ratings-list flex align-center">
                              <span className="stars">
                                {Array(item.average_rating_rounded)
                                  .fill("x")
                                  .map(() => "⭐ ")}
                              </span>
                              <span className="avg-rating">
                                ({item.average_rating} avg)
                              </span>
                            </div>
                          </div>
                          <span className="pub-year">
                            Pub {item.original_publication_year}
                          </span>
                        </div>
                      </ResultCard.Description>
                    </ResultCard>
                  ))}
                </ReactiveList.ResultCardsWrapper>
              )}
            />
          </div>
        </div>
      </ReactiveBase>
    );
  }
}

export default App;
