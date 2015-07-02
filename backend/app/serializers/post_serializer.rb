class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :created_at, :updated_at, :message
  attributes :image_large, :image_thumb, :image_medium
  attributes :height, :width, :aspect_ratio
  attributes :black_listed_user_ids

  def image_large
    "/large/large_#{object.image}"
  end

  def image_thumb
    "/thumbnails/thumb_#{object.image}"
  end

  def image_medium
    "/medium/med_#{object.image}"
  end

  def black_listed_user_ids
    userIds = []
    if object.id == 1
      userIds << 1
    end
    userIds
  end
end
