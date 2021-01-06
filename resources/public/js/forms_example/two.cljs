(ns forms-example.two
  (:require [json-html.core :refer [edn->hiccup]]
            [reagent.core :as r]
            [reagent-forms.core :refer [bind-fields init-field value-of]]
            [lambdaisland.fetch :as fetch]
            [cljs.core.async :refer [go]]
            [cljs.core.async.interop :refer-macros [<p!]]))

(defn row [label input]
  [:div.row
   [:div.col-md-2 [:label label]]
   [:div.col-md-5 input]])

(defn radio [label name value]
  [:div.radio
   [:label
    [:input {:field :radio :name name :value value}]
    label]])

(defn input [label type id]
  (row label [:input.form-control {:field type :id id}]))

;; (defn friend-source [text]
;;   (filter
;;    #(-> % (.toLowerCase %) (.indexOf text) (> -1))
;;    ["Alice" "Alan" "Bob" "Beth" "Jim" "Jane" "Kim" "Rob" "Zoe"]))

(def friends (r/atom ["no" "one" "here" "yet"]))

;; (defn friend-source-ajax [text]
;;   (if (= :all text)
;;     @friends
;;     (filter
;;      #(-> % (.toLowerCase %) (.indexOf text) (> -1))
;;      @friends)))

(defn reset-friends [result]
  (.log js/console (:body result))
  (let [edn (js->clj (:body result) :keywordize-keys true)
        _ (.log js/console (str "edn = " edn))]
    (reset! friends edn)))

(defn friend-source-ajax2 [text]
  (let [_ (.log js/console (str "searching: " text))
        _ (.log js/console (str "friends = " @friends))
        result (->
                (fetch/get "http://localhost:3000/api"
                           {:query-params {:text text}})
                (js/Promise.resolve)
                (.then #(reset-friends %)))]
    (.log js/console (str "result = " result))
    @friends))

(def form-template
  [:div
   (row "Best friend"
        [:div {:field           :typeahead
               :id              :ta
               :data-source     friend-source-ajax2
               :selections      friends
               :input-placeholder "Who's your best friend? You can pick only one"
               :input-class     "form-control"
               :list-class      "typeahead-list"
               :item-class      "typeahead-item"
               :highlight-class "highlighted"}])

   [:br]])

(defn page []
  (let [doc (atom {:person {:first-name "John"
                            :age 35
                            :email "foo@bar.baz"}
                   :weight 100
                   :height 200
                   :bmi 0.5
                   :comments "some interesting comments\non this subject"
                   :radioselection :b
                   :position [:left :right]
                   :pick-one :bar
                   :unique {:position :middle}
                   :pick-a-few [:bar :baz]
                   :many {:options :bar}})]
    (fn []
      [:div
       [:div.page-header [:h1 "Sample Form"]]

       [bind-fields
        form-template
        doc]

       [:button.btn.btn-default
        {:on-click
         (fn []
           (.log js/console "clicked.")
           ;; (reset! friends ["click" "clickity" "click" "click"])
           ;; (friend-source-ajax2 nil)
           )}
         "Lookup"]

       [:hr]
       [:h1 "Document State"]
       [edn->hiccup @doc]])))

(r/render-component [page] (.getElementById js/document "app"))
