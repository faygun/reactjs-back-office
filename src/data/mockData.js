export const mockOrderDataList = [
    {
      "type": "Order",
      "id": "8bc1cc02-7050-4c79-b552-f9321d9c5ef0",
      "attributes": {
        "merchant_id": "9d21fdd7-9986-458c-9542-e325d546036e",
        "logistics_provider_id": "9d21fdd7-9986-458c-9542-e325d546036e",
        "order_id": "8bc1cc02-7050-4c79-b552-f9321d9c5ef0",
        "order_number": "23235501602317",
        "order_date": "2022-11-24T13:47:18.395+00:00",
        "merchant_order_id": "",
        "sales_channel_id": "01924c48-49bb-40c2-9c32-ab582e6db6f4",
        "locale": "de-DE",
        "customer_number": "123456",
        "status": "initial",
        "shipping_address": {
          "address_type": "HOME_ADDRESS",
          "address_id": "4f935082-8920-4533-89ae-bf4382afbd98",
          "first_name": "Faruk",
          "last_name": "Doe",
          "address_line_1": "88 Halsey Drive",
          "zip_code": "SG4 9QR",
          "city": "Hitchin",
          "country_code": "DE"
        },
        "shipment_number": "100000",
        "billing_address": {
          "address_type": "HOME_ADDRESS",
          "address_id": "f77e86c6-aec1-4398-9f94-71c3d84275e3",
          "first_name": "Faruk",
          "last_name": "Doe",
          "address_line_1": "88 Halsey Drive",
          "zip_code": "SG4 9QR",
          "city": "Hitchin",
          "country_code": "DE"
        },
        "tracking_number": "",
        "return_tracking_number": "",
        "order_lines_count": 1,
        "order_lines_price_amount": 50,
        "order_lines_price_currency": "EUR",
        "delivery_end_date": "2014-02-10T08:31:48.871+00:00",
        "exported": false,
        "created_by": "",
        "created_at": "2022-11-24T13:49:04.550+00:00",
        "modified_by": "system",
        "modified_at": "2022-11-24T13:52:24.164+00:00",
        "order_type": "ZalandoFulfilled",
        "customer_email": "pp-cc-kam+23235501602317@zalando.de"
      },
      "links": {
        "self": "https://api-sandbox.merchants.zalando.com/merchants/9d21fdd7-9986-458c-9542-e325d546036e/orders/8bc1cc02-7050-4c79-b552-f9321d9c5ef0"
      },
      "relationships": {
        "order_items": {
          "links": {
            "related": "https://api-sandbox.merchants.zalando.com/merchants/9d21fdd7-9986-458c-9542-e325d546036e/orders/8bc1cc02-7050-4c79-b552-f9321d9c5ef0/items"
          },
          "data": [
            {
              "type": "OrderItem",
              "id": "95ed2272-7674-3bfd-9f14-37a736617f85"
            }
          ]
        },
        "order_transitions": {
          "links": {
            "related": "https://api-sandbox.merchants.zalando.com/merchants/9d21fdd7-9986-458c-9542-e325d546036e/orders/8bc1cc02-7050-4c79-b552-f9321d9c5ef0/transitions"
          }
        }
      }
    },
    {
      "type": "Order",
      "id": "d5113608-7f9b-4cc0-8fc9-fc8c5e680300",
      "attributes": {
        "merchant_id": "9d21fdd7-9986-458c-9542-e325d546036e",
        "logistics_provider_id": "9d21fdd7-9986-458c-9542-e325d546036e",
        "order_id": "d5113608-7f9b-4cc0-8fc9-fc8c5e680300",
        "order_number": "51118810069091",
        "order_date": "2022-11-24T13:47:18.564+00:00",
        "merchant_order_id": "51118810069091",
        "sales_channel_id": "01924c48-49bb-40c2-9c32-ab582e6db6f4",
        "locale": "de-DE",
        "customer_number": "123456",
        "status": "fulfilled",
        "shipping_address": {
          "address_type": "HOME_ADDRESS",
          "address_id": "43916927-17a7-4732-93c4-a21ac66ddac0",
          "first_name": "Faruk",
          "last_name": "Doe",
          "address_line_1": "88 Halsey Drive",
          "zip_code": "SG4 9QR",
          "city": "Hitchin",
          "country_code": "DE"
        },
        "shipment_number": "802866",
        "billing_address": {
          "address_type": "HOME_ADDRESS",
          "address_id": "2954d90a-a124-4e16-af76-709daf4ec97a",
          "first_name": "Faruk",
          "last_name": "Doe",
          "address_line_1": "88 Halsey Drive",
          "zip_code": "SG4 9QR",
          "city": "Hitchin",
          "country_code": "DE"
        },
        "tracking_number": "",
        "return_tracking_number": "",
        "order_lines_count": 1,
        "order_lines_price_amount": 50,
        "order_lines_price_currency": "EUR",
        "delivery_end_date": "2013-11-02T22:08:33.252+00:00",
        "exported": true,
        "created_by": "",
        "created_at": "2022-11-24T13:49:20.892+00:00",
        "modified_by": "system",
        "modified_at": "2022-11-24T13:52:04.493+00:00",
        "order_type": "ZalandoFulfilled",
        "customer_email": "pp-cc-kam+51118810069091@zalando.de",
        "stock_location_id": "1e57b2b6-907b-4676-8766-339a1d596e59"
      },
      "links": {
        "self": "https://api-sandbox.merchants.zalando.com/merchants/9d21fdd7-9986-458c-9542-e325d546036e/orders/d5113608-7f9b-4cc0-8fc9-fc8c5e680300"
      },
      "relationships": {
        "order_items": {
          "links": {
            "related": "https://api-sandbox.merchants.zalando.com/merchants/9d21fdd7-9986-458c-9542-e325d546036e/orders/d5113608-7f9b-4cc0-8fc9-fc8c5e680300/items"
          },
          "data": [
            {
              "type": "OrderItem",
              "id": "6b7fb3ef-03d3-377d-b77d-9c7fcb76698b"
            }
          ]
        },
        "order_transitions": {
          "links": {
            "related": "https://api-sandbox.merchants.zalando.com/merchants/9d21fdd7-9986-458c-9542-e325d546036e/orders/d5113608-7f9b-4cc0-8fc9-fc8c5e680300/transitions"
          }
        }
      }
    },
    {
      "type": "Order",
      "id": "bb1f63d3-f97f-4c31-8813-e9f62f878b0a",
      "attributes": {
        "merchant_id": "9d21fdd7-9986-458c-9542-e325d546036e",
        "logistics_provider_id": "9d21fdd7-9986-458c-9542-e325d546036e",
        "order_id": "bb1f63d3-f97f-4c31-8813-e9f62f878b0a",
        "order_number": "54877803368220",
        "order_date": "2022-11-24T13:47:18.395+00:00",
        "merchant_order_id": "",
        "sales_channel_id": "01924c48-49bb-40c2-9c32-ab582e6db6f4",
        "locale": "de-DE",
        "customer_number": "123456",
        "status": "approved",
        "shipping_address": {
          "address_type": "HOME_ADDRESS",
          "address_id": "0190a8bf-ab21-4e05-8c08-365850f44ebb",
          "first_name": "Faruk",
          "last_name": "Doe",
          "address_line_1": "88 Halsey Drive",
          "zip_code": "SG4 9QR",
          "city": "Hitchin",
          "country_code": "DE"
        },
        "shipment_number": "100000",
        "billing_address": {
          "address_type": "HOME_ADDRESS",
          "address_id": "6b728e12-c694-4eaa-9fd3-6000ade7469e",
          "first_name": "Faruk",
          "last_name": "Doe",
          "address_line_1": "88 Halsey Drive",
          "zip_code": "SG4 9QR",
          "city": "Hitchin",
          "country_code": "DE"
        },
        "tracking_number": "",
        "return_tracking_number": "",
        "order_lines_count": 2,
        "order_lines_price_amount": 100,
        "order_lines_price_currency": "EUR",
        "delivery_end_date": "2002-01-23T17:00:19.975+00:00",
        "exported": false,
        "created_by": "",
        "created_at": "2022-11-24T13:47:50.630+00:00",
        "modified_by": "system",
        "modified_at": "2022-11-24T13:49:23.859+00:00",
        "order_type": "ZalandoFulfilled",
        "customer_email": "pp-cc-kam+54877803368220@zalando.de",
        "stock_location_id": "1e57b2b6-907b-4676-8766-339a1d596e59"
      },
      "links": {
        "self": "https://api-sandbox.merchants.zalando.com/merchants/9d21fdd7-9986-458c-9542-e325d546036e/orders/bb1f63d3-f97f-4c31-8813-e9f62f878b0a"
      },
      "relationships": {
        "order_items": {
          "links": {
            "related": "https://api-sandbox.merchants.zalando.com/merchants/9d21fdd7-9986-458c-9542-e325d546036e/orders/bb1f63d3-f97f-4c31-8813-e9f62f878b0a/items"
          },
          "data": [
            {
              "type": "OrderItem",
              "id": "ae6b0aae-e155-3693-84e0-8390c3eb0346"
            }
          ]
        },
        "order_transitions": {
          "links": {
            "related": "https://api-sandbox.merchants.zalando.com/merchants/9d21fdd7-9986-458c-9542-e325d546036e/orders/bb1f63d3-f97f-4c31-8813-e9f62f878b0a/transitions"
          }
        }
      }
    }
  ]