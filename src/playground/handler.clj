(ns playground.handler
  (:require [compojure.core :refer [defroutes GET]]
            [compojure.route :as route]
            [noir.response :as noir]
            [noir.util.middleware :refer [app-handler]]
            [playground.hundy :as hundy]
            [selmer.parser :as parser]))

(defn resource [r]
 (-> (Thread/currentThread)
     (.getContextClassLoader)
     (.getResource r)
     slurp))

(defn search [list text]
  (prn (format "searching for '%s'" text))
  (if (nil? text)
    list
    (filter (fn [s] (clojure.string/includes?
                     (clojure.string/lower-case s)
                     (clojure.string/lower-case text)))
            list)))

(defroutes base-routes
  (GET "/" []
    (parser/render-file "templates/app.html"
                        {:forms-css (resource "reagent-forms.css")
                         :json-css (resource "json.human.css")}))
  (GET "/api*" [text]
       (noir/json (search hundy/names text)))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app (app-handler [base-routes]
                      :ring-defaults {:params {:urlencoded true}}))
