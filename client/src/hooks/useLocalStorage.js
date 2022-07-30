export default function useLocalStorage(key) {
  return localStorage.getItem(key);
}
