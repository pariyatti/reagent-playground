(ns forms-example.two
  (:require [json-html.core :refer [edn->hiccup]]
            [reagent.core :as r]
            [reagent-forms.core :refer [bind-fields init-field value-of]]
            [lambdaisland.fetch :as fetch]
            [kitchen-async.promise :as p]
            [cljs.core.async :refer [go]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [forms-example.mediabox]))

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

(def friends (r/atom ["no" "one" "here" "yet"]))

(defn reset-friends [result]
  (.log js/console (:body result))
  (let [edn (js->clj (:body result) :keywordize-keys true)
        _ (.log js/console (str "edn = " edn))]
    (reset! friends edn)))

;; function sleep(seconds)
;; {
;;   var e = new Date().getTime() + (seconds * 1000);
;;   while (new Date().getTime() <= e) {}
;; }

(defn sleep [secs]
  (let [mils (* secs 1000)
        e (-> (js/Date.) (.getTime) (+ mils))]
    (while (< (.getTime (js/Date.)) e)
      nil)))

(defn friend-source-ajax2 [text]
  (let [_ (.log js/console (str "searching: " text))
        _ (.log js/console (str "friends = " @friends))
        result (->
                (fetch/get "http://localhost:3000/api"
                           {:query-params {:text text}})
                (js/Promise.resolve)
                (.then #(reset-friends %)))]
    ;; as one would expect, this doesn't work:
    ;; (sleep 1)
    (.log js/console (str "result = " result))
    @friends))

(def form-template
  [:div
   (row "Best friend"
        [:div {:field           :mediabox
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
  (let [doc (atom {:pick-one :bar})]
    (fn []
      [:div
       [:div.page-header [:h1 "View Two"]]
       [:div (str "friends = " @friends)]

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
