// import { ImageTypeState } from './imageTypeSlice';
// import { GAME_IMAGE_TYPE } from '@/constants/collection';
// import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

// export type GameImageType =
//   (typeof GAME_IMAGE_TYPE)[keyof typeof GAME_IMAGE_TYPE];

// export interface ImageTypeState {
//   type: GameImageType;
// }

// const initialState: ImageTypeState = {
//   type: GAME_IMAGE_TYPE.RECENT_GAMES,
// };

// export const imageTypeSlice = createSlice({
//   name: 'imageType',
//   initialState,
//   reducers: {
//     changeImageType: (state, action: PayloadAction<ImageTypeState>) => {
//       state.type = action.payload.type;
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const { changeImageType } = imageTypeSlice.actions;

// export const imageTypeReducer = imageTypeSlice.reducer;
