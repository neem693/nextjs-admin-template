import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// 상태 타입 정의
interface TestState {
  value: number;
  jsonStr: string;
}
// 초기 상태
const initialState: TestState = { value: 0, jsonStr: '' };
// Slice 생성
export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    setJsonStr: (state, action: PayloadAction<string>) => {
      state.jsonStr = action.payload;
    },
  },
});

// 액션 export
export const { increment, decrement, setCount } = testSlice.actions;
