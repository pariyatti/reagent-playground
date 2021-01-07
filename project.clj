(defproject forms-example "0.1.0-SNAPSHOT"
  :description "A sample application using reagent-forms"
  :url "https://github.com/yogthos/reagent-forms"

  :dependencies
  [[org.clojure/clojure "1.10.1"]
   [selmer "0.9.1"]
   [ring-server "0.4.0"]
   [lib-noir "0.9.7"]

   [org.clojure/clojurescript "1.10.191"]
   [org.clojure/core.async "1.3.610"]
   [reagent-forms "0.5.23"]
   [json-html "0.3.5"]
   [kitchen-async "0.1.0-SNAPSHOT"]
   [lambdaisland/uri "1.4.54"] ;; fetch dep
   [lambdaisland/fetch "0.0.23"]]

  :ring {:handler playground.handler/app}

  :cljsbuild
  {:builds
   [{:source-paths ["src-cljs"],
     :compiler
     {:output-dir "resources/public/js/",
      :optimizations :none,
      :output-to "resources/public/js/app.js",
      :source-map true,
      :pretty-print true}}]}

  :plugins
  [[lein-ring "0.12.5"]
   [lein-cljsbuild "1.1.8"]]

  :jvm-opts ["-server"]

  :profiles
  {:uberjar {:aot :all}
   :release {:ring {:open-browser? false
                    :stacktraces?  false
                    :auto-reload?  false}}
   :dev {:dependencies [[ring-mock "0.1.5"]
                        [ring/ring-devel "1.4.0"]]}})
