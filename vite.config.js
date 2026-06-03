client_id = "43f7ebe1c4838987181ace9f7b11d396"
name = "scalable-partnership-app"
application_url = "https://scalable-partnership-app-production.up.railway.app"
embedded = true

[access_scopes]
scopes = "write_products,write_metaobjects,write_metaobject_definitions"

[product.metafields.app.demo_info]
type = "single_line_text_field"
name = "Demo Source Info"
description = "Tracks products created by the Shopify app template for development"

  [product.metafields.app.demo_info.access]
  admin = "merchant_read_write"

[metaobjects.app.example]
name = "Example"
description = "An example metaobject definition created by this template"

  [metaobjects.app.example.access]
  admin = "merchant_read_write"

[metaobjects.app.example.fields.title]
name = "Title"
type = "single_line_text_field"
required = true

[metaobjects.app.example.fields.description]
name = "Description"
type = "multi_line_text_field"

[webhooks]
api_version = "2026-07"

  [[webhooks.subscriptions]]
  uri = "/webhooks/app/uninstalled"
  topics = [ "app/uninstalled" ]

  [[webhooks.subscriptions]]
  uri = "/webhooks/app/scopes_update"
  topics = [ "app/scopes_update" ]

[auth]
redirect_urls = [
  "https://scalable-partnership-app-production.up.railway.app/auth/callback",
  "https://scalable-partnership-app-production.up.railway.app/auth/shopify/callback"
]

[build]
automatically_update_urls_on_dev = true