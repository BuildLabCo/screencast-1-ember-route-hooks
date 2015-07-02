class UpdatePos < ActiveRecord::Migration
  def change
    remove_column :posts, :image_thumb
    remove_column :posts, :image_large
    add_column :posts, :height, :integer
    add_column :posts, :width, :integer
    add_column :posts, :aspect_ratio, :decimal
  end
end
