import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { testSlice } from './test/store';

// Redux Store 생성
export const store = configureStore({
  reducer: {
    test: testSlice.reducer,
  },
});
// RootState, AppDispatch 타입 설정
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// useDispatch, useSelector의 타입 지정된 Hook 생성
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
