import namespaces from "./namespaces";

export default function(name) {
  var i = name.indexOf(":"), prefix = name;
  if (i >= 0) prefix = name.slice(0, i), name = name.slice(i + 1);
  return namespaces.has(prefix) ? {space: namespaces.get(prefix), local: name} : name;
};
