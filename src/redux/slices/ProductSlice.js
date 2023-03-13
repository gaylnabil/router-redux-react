import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
    /*
    Initialize the state of the store.

    Parameters
    ----------
    None

    Returns
    -------
    Object
        Return the state of the store.
    */
  return {
    products: [
        /*
        list of products.
        */
      {
        id: 1,
        name: "Dell precision 5570",
        description:
            /*
            15 workstation with 4-sided InfinityEdge display, Dell Optimizer for Precision and up to 12th Gen Intel® Core™ i9 and NVIDIA RTX™ A2000 graphics.
            */
          "15 workstation with 4-sided InfinityEdge display, Dell Optimizer for Precision and up to 12th Gen Intel® Core™ i9 and NVIDIA RTX™ A2000 graphics.",
        price: 2049,
      },
      {
        id: 2,
        name: "Dell Latitude 7480",
        description:
            /*
            This 14 business-class laptop is incredibly mobile without compromise. Featuring industry leading security, manageability and reliability.
            */
          "This 14 business-class laptop is incredibly mobile without compromise. Featuring industry leading security, manageability and reliability.",
        price: 1600,
      },
      {
        id: 3,
        name: "HP Pavilion Laptop 15t-eg200",
        description:
            /*
            Windows 11 HomeIntel® Core™ i7-1255U (up to 4.7 GHz, 12 MB L3 cache, 10 cores, 12 threads) + Intel® Iris® Xe Graphics16 GB DDR4-3200 SDRAM (2 x 8 GB)512 GB PCIe® NVMe™ M.2 SSD
            */
          "Windows 11 HomeIntel® Core™ i7-1255U (up to 4.7 GHz, 12 MB L3 cache, 10 cores, 12 threads) + Intel® Iris® Xe Graphics16 GB DDR4-3200 SDRAM (2 x 8 GB)512 GB PCIe® NVMe™ M.2 SSD",
        price: 1850,
      },
      {
        id: 4,
        name: "MSI STEALTH 15M",
        description:
            /*
            11th Generation Intel® Core™i7-1185G7 processor 16GB RAM 15.6“ Full HD (1920×1080), 144 Hz Refresh Rate GeForce® RTX 2060 Max-Q 6GB GDDR6 512GB SSD Air Gaming Backpack
            */
          "11th Generation Intel® Core™i7-1185G7 processor 16GB RAM 15.6“ Full HD (1920×1080), 144 Hz Refresh Rate GeForce® RTX 2060 Max-Q 6GB GDDR6 512GB SSD Air Gaming Backpack",
        price: 2359,
      },
    ],
    productSelected: null,
        /*
        selected product.
        */
  };
};

/*
This code is for a Redux store.
The code starts by creating a slice with the name "product".
The code then sets the initial state of the store to "initialState".
The code then has a reducers object that contains the "getProduct" action.
The "getProduct" action sets the "productSelected" property of the state to the payload of the action.
*/

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    // Here we can define all actions
    getProduct: (state, action) => {
      state.productSelected = action.payload;
    },
  },
});

export const { getProduct } = productSlice.actions;
export const productReducer = productSlice.reducer;
