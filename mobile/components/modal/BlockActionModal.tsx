import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../assets/theme/theme";
import color from "../../assets/theme/colors";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/RootStackParamList";

interface BlockActionModalProps {
  isVisible: boolean;
  onClose: () => void;
  block_id: string;
  blockName: string;
}

interface Action {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}

const ACTIONS: Action[] = [
  {
    id: "view",
    title: "View details",
    icon: "eye-outline",
    color: color.blue,
  },
  {
    id: "stats",
    title: "Apartments of block",
    icon: "business-outline",
    color: color.green,
  },
];

const BlockActionModal: React.FC<BlockActionModalProps> = ({
  isVisible,
  onClose,
  block_id,
  blockName,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleAction = (actionId: string) => {
    switch (actionId) {
      case "view":
        navigation.navigate("UpdateBlockForm", {
          block_id: block_id,
        });
        break;
      case "stats":
        navigation.navigate("Apartment", { block_id });
        break;
    }
    onClose();
  };

  const renderItem = ({ item }: { item: Action }) => (
    <TouchableOpacity
      style={[styles.actionItem, { backgroundColor: `${item.color}10` }]}
      onPress={() => handleAction(item.id)}
      activeOpacity={0.7}
    >
      <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
        <Ionicons name={item.icon} size={24} color="#FFF" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.actionTitle}>{item.title}</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={20} color={item.color} />
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      statusBarTranslucent
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <View>
              <Text style={styles.blockLabel}>BLOCK NAME</Text>
              <Text style={styles.blockName}>{blockName}</Text>
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={onClose}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons name="close-outline" size={24} color={color.gray} />
            </TouchableOpacity>
          </View>

          <FlatList
            data={ACTIONS}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    paddingBottom: Platform.OS === "ios" ? 40 : 20,
    maxHeight: "80%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: color.lightGray,
  },
  blockLabel: {
    fontSize: 12,
    color: color.black,
    fontFamily: theme.fonts.medium,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  blockName: {
    fontSize: 24,
    fontFamily: theme.fonts.semiBold,
    color: color.black,
  },
  listContainer: {
    gap: 12,
  },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    marginRight: 8,
  },
  actionTitle: {
    fontSize: 16,
    fontFamily: theme.fonts.medium,
    color: color.black,
    marginBottom: 4,
  },
  closeButton: {
    padding: 4,
  },
});

export default BlockActionModal;