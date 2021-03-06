import React from "react"
import ReactDOM from "react-dom"
import {containerExists} from "./update-dom"
import {reduce, map, prop, propEq, compose, filter, partial, keys, uniq} from "ramda"

function covertToArray(registry) {
  return reduce((accum, key) => {
    accum.push(registry[key])
    return accum
  }, [], keys(registry))
}

function uniqueContainers(registry) {
  return compose(
    uniq,
    map(prop("selector"))
  )(covertToArray(registry))
}

function appendToDOM(selector, arrayOfElements) {
  const container = containerExists(selector)
  if(container) {
    ReactDOM.render((<span>{arrayOfElements}</span>), container)
  }
}

function injectSubtree(registry, selector) {
  compose(
    partial(appendToDOM, [selector]),
    reduce((arrayOfElements, item) => {
      arrayOfElements.push(item.element)
      return arrayOfElements
    }, []),
    filter(propEq("selector", selector))
  )(covertToArray(registry))
}

export function renderSubtree(registry) {
  return map(injectSubtree.bind(null, registry), uniqueContainers(registry))
}
