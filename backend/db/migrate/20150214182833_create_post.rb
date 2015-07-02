class CreatePost < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :image
      t.string :image_thumb
      t.string :image_large
      t.string :message

      t.timestamps
    end
  end
end
