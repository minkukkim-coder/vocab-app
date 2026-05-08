'use client';

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, signOut as fbSignOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDydyeREKDov1GLECNFyjJoa6XwAUfeSno",
  authDomain: "family-vocab-app-717f5.firebaseapp.com",
  projectId: "family-vocab-app-717f5",
  storageBucket: "family-vocab-app-717f5.firebasestorage.app",
  messagingSenderId: "826203410839",
  appId: "1:826203410839:web:dd55aad002f526ac8534d2",
  measurementId: "G-G7T3R9G376",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = typeof window !== 'undefined' ? getAuth(app) : null;
export const db = typeof window !== 'undefined' ? getFirestore(app) : null;

const googleProvider = new GoogleAuthProvider();

export function signInWithGoogle() {
  if (!auth) return Promise.reject(new Error('Auth not initialized'));
  // Use popup for desktop, redirect for mobile (better UX on iPad)
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isMobile) {
    return signInWithRedirect(auth, googleProvider);
  }
  return signInWithPopup(auth, googleProvider);
}

export function signOut() {
  if (!auth) return Promise.reject(new Error('Auth not initialized'));
  return fbSignOut(auth);
}

export function onAuth(callback) {
  if (!auth) return () => {};
  return onAuthStateChanged(auth, callback);
}

export async function checkRedirectResult() {
  if (!auth) return null;
  try {
    return await getRedirectResult(auth);
  } catch (e) {
    console.error('Redirect result error:', e);
    return null;
  }
}

// User data operations
function userDoc(uid) {
  return doc(db, 'users', uid);
}

export async function loadUserData(uid) {
  if (!db) return null;
  const snap = await getDoc(userDoc(uid));
  return snap.exists() ? snap.data() : null;
}

export async function saveUserData(uid, data) {
  if (!db) return;
  await setDoc(userDoc(uid), data, { merge: true });
}

export function subscribeUserData(uid, callback) {
  if (!db) return () => {};
  return onSnapshot(userDoc(uid), (snap) => {
    callback(snap.exists() ? snap.data() : null);
  });
}
