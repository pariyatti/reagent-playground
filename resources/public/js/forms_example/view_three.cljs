(ns forms-example.view-three
  (:require [json-html.core :refer [edn->hiccup]]
            [reagent.core :as r]
            [reagent-forms.core :refer [bind-fields init-field value-of]]
            [lambdaisland.fetch :as fetch]
            [forms-example.mediabox]))

(defn row [label input]
  [:div.row
   [:div.col-md-2 [:label label]]
   [:div.col-md-5 input]])

(def friends (r/atom ["no" "one" "here" "yet"]))

(defn reset-friends [result]
  (.log js/console (:body result))
  (let [edn (js->clj (:body result) :keywordize-keys true)
        _ (.log js/console (str "edn = " edn))]
    (reset! friends edn)))

(defn friend-source [text]
  (let [_ (.log js/console (str "searching: " text))
        _ (.log js/console (str "friends = " @friends))
        result (->
                (fetch/get "http://localhost:3000/api"
                           {:query-params {:text text}})
                (js/Promise.resolve)
                (.then #(reset-friends %)))]
    (.log js/console (str "result = " result))
    @friends))

(defn show-media [item]
  [:img ])

(def form-template
  [:div
   (row "Best friend"
        [:div {:field             :mediabox
               :id                :ta
               :data-source       friend-source
               :selections        friends
               :result-fn         show-media
               :input-placeholder "Who's your best friend? You can pick only one"
               :input-class       "form-control"
               :list-class        "mediabox-list"
               :item-class        "mediabox-item"
               :highlight-class   "highlighted"}])
   [:br]])

(defn page []
  (let [doc (atom {:pick-one :bar})]
    (fn []
      [:div
       [:div.page-header [:h1 "Sample Form"]]
       [:div (str "friends = " @friends)]

       [bind-fields
        form-template
        doc]

       [:button.btn.btn-default
        {:on-click
         (fn []
           (.log js/console "clicked."))}
         "Lookup"]

       [:hr]
       [:h1 "Document State"]
       [edn->hiccup @doc]])))

(r/render-component [page] (.getElementById js/document "app"))
